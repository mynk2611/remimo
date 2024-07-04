import prisma from "@repo/db/client";
import express from "express";

const app = express();

app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
    const paymentInfo : {
        token : string,
        amount : string,
        userId : string
    } = {
        token : req.body.token,
        amount : req.body.amount,   
        userId : req.body.user_Identifier
    }

    try {
        await prisma.$transaction([
            prisma.balance.updateMany({
                where : {
                    userId : Number(paymentInfo.userId)
                },
                data : {
                    amount : {
                        increment : Number(paymentInfo.amount)
                    }
                }
            }),
            prisma.onRamp.updateMany({
                where : {
                    token : paymentInfo.token
                },
                data : {
                    status : "success"
                }
            })         
        ])
    } catch(e){
        console.error(e);
        res.status(411).json({
            message : "error while processing webhook"
        })
    }
})

app.listen(3003);