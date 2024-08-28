import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";
import prisma from "@repo/db/client";

export async function getBankTransactions() {
  const session = await getServerSession(authOptions)
  const BankTransactions = await prisma.onRamp.findMany({
    where: {
      userId: Number(session?.user?.id)
    }
  });

  BankTransactions.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  return BankTransactions.map(t => ({
    amount: t.amount,
    status: t.status,
    date: t.startDate,
    provider: t.provider
  }));
}
