import { transactionType, onrampStatus, transactionStatus } from "@prisma/client";
import { BankToWalletTxns } from "./BankToWalletTxns";
import { P2Ptxns } from "./P2Ptxns";

interface phoneTxnsProp {
  amount: number;
  status: transactionStatus;
  date: Date;
  type: transactionType;
  remark: string | null;
  fromUser: number;
  toUser: number;
  fromUserName: string;
  toUserName: string;
}

interface bankTxnsProp {
  amount: number;
  status: onrampStatus;
  date: Date;
  provider: string;
}

export function AllTxns({ PhoneTransactions, BankTransactions }: {
  PhoneTransactions: phoneTxnsProp[],
  BankTransactions: bankTxnsProp[]
}) {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-8">
      <div className="mb-8 md:mb-0 md:col-span-6">
        <P2Ptxns transactions={PhoneTransactions} />
      </div>

      <div className="mb-8 md:mb-0 md:col-span-6">
        <BankToWalletTxns transactions={BankTransactions} />
      </div>
    </div>

  )
}
