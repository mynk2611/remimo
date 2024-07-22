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

export function AllTxns({ PhoneTransactions, BankTransactions} : {
    PhoneTransactions : phoneTxnsProp[],
    BankTransactions : bankTxnsProp[]
}){
    return (
        <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6">
            <P2Ptxns transactions={PhoneTransactions} />          
        </div>

        <div className="col-span-6">
          <BankToWalletTxns transactions={BankTransactions}/>
        </div>
      </div>

    )
}