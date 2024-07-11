import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import WalletBalance from "../../../components/WalletBalance";
import Card from "@repo/ui/card";
import { LockedBalance } from "../../../components/LockedBalance";
import { UnlockedBalance } from "../../../components/UnlockedBalance";
import { AppbarClient } from "../../../components/appbarClient";
import { BankTransfer } from "../../../components/BankToWalletTxns";


async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(session?.user?.id)
    }
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0
  }
}

async function getTransactions(){
  const session = await getServerSession(authOptions)
  const transactions = await prisma.onRamp.findMany({
    where : {
      userId : Number(session?.user?.id)
    }
  });
  return transactions.map(t => ({
    amount : t.amount,
    status : t.status,
    date : t.startDate,
    provider : t.provider
  }));
}

export default async function dashboard() {
  const balance = await getBalance();
  const transactions = await getTransactions();

  return (
    <div className="spotlight-bg h-max ">
      <div className="flex justify-center">
        <div className="w-10/12 flex justify-center mt-3">
          <AppbarClient />
        </div>
      </div>
      <div className="flex justify-center h-min">
        <div className="border rounded-2xl border-zinc-600 p-10 mt-6 mx-4 w-11/12">
          <div className="flex justify-evenly p-4 mb-20">

            <WalletBalance amount={balance.amount} />

            <LockedBalance locked={balance.locked} />

            <UnlockedBalance unlocked={balance.amount - balance.locked} />

          </div>

          <div className="w-3/5">
            <BankTransfer transactions={transactions}/>
          </div>
        </div>
      </div>
    </div>
  );
}
