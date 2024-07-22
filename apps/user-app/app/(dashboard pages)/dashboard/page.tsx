import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import WalletBalance from "../../../components/WalletBalance";
import Card from "@repo/ui/card";
import { LockedBalance } from "../../../components/LockedBalance";
import { UnlockedBalance } from "../../../components/UnlockedBalance";
import { AppbarClient } from "../../../components/appbarClient";
import { BankToWalletTxns } from "../../../components/BankToWalletTxns";
import { P2Ptxns } from "../../../components/P2Ptxns";
import { transactionType } from "@prisma/client"; 
import { DashboardAppbarClient } from "../../../components/DashboardAppbarClient";
import { BalancesCards } from "../../../components/BalanceCards";
import { AllTxns } from "../../../components/AllTxns";


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

async function getBankTransactions(){
  const session = await getServerSession(authOptions)
  const BankTransactions = await prisma.onRamp.findMany({
    where : {
      userId : Number(session?.user?.id)
    }
  });

  BankTransactions.sort((a,b) => b.startDate.getTime() - a.startDate.getTime());

  return BankTransactions.map(t => ({
    amount : t.amount,
    status : t.status,
    date : t.startDate,
    provider : t.provider
  }));
}

async function getPhoneTransaction(){
  const session = await getServerSession(authOptions)
  const userId = Number(session?.user?.id);

  const sentTransaction = await prisma.transaction.findMany({
    where : {
      fromUserId : userId
    },
    include :{
      fromUser : true,
      toUser : true
    }
  })

  const receivedTransaction = await prisma.transaction.findMany({
    where : {
      toUserId : userId 
    },
    include : {
      fromUser : true,
      toUser : true 
    }
  })

  const allTransactions = [...sentTransaction, ...receivedTransaction];

  allTransactions.sort((a,b) => b.startDate.getTime() - a.startDate.getTime());

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

export default async function dashboard() {
  const balance = await getBalance();
  const BankTransactions = await getBankTransactions();
  const PhoneTransaction = await getPhoneTransaction();

  return (
    <div className="spotlight-bg h-max ">
      <DashboardAppbarClient />
      
      <div className="flex justify-center h-min">
        <div className="border rounded-2xl border-zinc-600 p-10 mt-24 mx-4 w-11/12">
          <BalancesCards balance={balance} />
          <AllTxns PhoneTransactions={PhoneTransaction} BankTransactions={BankTransactions} />
        </div>
      </div>
    </div>
  );
}
