import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";
import prisma from "@repo/db/client";
import { transactionType } from "@prisma/client";

export async function getPhoneTransaction() {
  const session = await getServerSession(authOptions)
  const userId = Number(session?.user?.id);

  const sentTransaction = await prisma.transaction.findMany({
    where: {
      fromUserId: userId
    },
    include: {
      fromUser: true,
      toUser: true
    }
  })

  const receivedTransaction = await prisma.transaction.findMany({
    where: {
      toUserId: userId
    },
    include: {
      fromUser: true,
      toUser: true
    }
  })

  const allTransactions = [...sentTransaction, ...receivedTransaction];

  allTransactions.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  return allTransactions.map(t => ({
    amount: t.amount,
    status: t.status,
    date: t.startDate,
    type: t.fromUserId === userId ? transactionType.Debit : transactionType.Credit,
    remark: t.remark || "",
    fromUser: t.fromUserId,
    toUser: t.toUserId,
    fromUserName: t.fromUser.name || "",
    toUserName: t.toUser.name || ""
  }));

}
