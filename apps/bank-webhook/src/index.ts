import prisma from "@repo/db/client";
import express from "express";
import { transactionStatus } from "@prisma/client";

const app = express();

app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
  const paymentInfo: {
    token: string,
    amount: string,
    userId: string,
    status: transactionStatus
  } = {
    token: req.body.token,
    amount: req.body.amount,
    userId: req.body.user_Identifier,
    status: req.body.status
  }

  try {
    if (paymentInfo.status === "success") {
      await prisma.$transaction([
        prisma.balance.updateMany({
          where: {
            userId: Number(paymentInfo.userId)
          },
          data: {
            amount: {
              increment: Number(paymentInfo.amount)
            }
          }
        }),
        prisma.onRamp.updateMany({
          where: {
            token: paymentInfo.token
          },
          data: {
            status: paymentInfo.status
          }
        })
      ]);
      res.json({
        message: "Captured"
      });
    } else if (paymentInfo.status === "failure") {
      await prisma.onRamp.updateMany({
        where: {
          token: paymentInfo.token,
          status: "pending"
        },
        data: {
          status: "failure"
        }
      });
      res.json({
        message: "Status updated to failure"
      });
    } else {
      res.json({
        message: "No action taken for non-success and non-failure status"
      });
    }
  } catch (e) {
    console.error(e);
    res.status(411).json({
      message: "error while processing webhook"
    });
  }
});

app.listen(3003, () => {
  console.log("Server started at port 3003");
});
