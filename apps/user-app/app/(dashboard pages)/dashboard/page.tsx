import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import WalletBalance from "../../../components/WalletBalance";
import Card from "@repo/ui/card";
import { LockedBalance } from "../../../components/LockedBalance";
import { UnlockedBalance } from "../../../components/UnlockedBalance";
import { AppbarClient } from "../../../components/appbarClient";
import { BankToWalletTxns } from "../../../components/BankToWalletTxns";


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
  return BankTransactions.map(t => ({
    amount : t.amount,
    status : t.status,
    date : t.startDate,
    provider : t.provider
  }));
}

async function getPhoneTransaction(){
  const session = await getServerSession(authOptions)
  const userId = Number(session?.userr?.id);

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
    type: t.type,
    remark: t.remark,
    fromUser: t.fromUserId,
    toUser: t.toUserId,
    fromUserName: t.fromUser.name,
    toUserName: t.toUser.name
  })); 

}

export default async function dashboard() {
  const balance = await getBalance();
  const BankTransactions = await getBankTransactions();
  const PhoneTransaction = await getPhoneTransaction();

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
            <BankToWalletTxns transactions={BankTransactions}/>
          </div>
        </div>
      </div>
    </div>
  );
}
