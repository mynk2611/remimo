import { TransferCard } from "@repo/ui/transferCard";
import { transactionStatus, transactionType } from "@prisma/client";
import { PhoneCard } from "@repo/ui/phoneCard";

interface transactionProp {
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

export function P2Ptxns({transactions}: {transactions : transactionProp[]}){

    if(!transactions.length){
        return(
        <TransferCard title="Wallet Transactions">
            <div className="flex justify-center  min-h-40">
                <div className="flex flex-col justify-center text-white">
                        No Recent Transactions
                </div>
            </div>
        </TransferCard>
        )
    }
    return(
    <TransferCard title="Wallet Transactions">
         { transactions.map( t => <PhoneCard transactions={t} />) }
    </TransferCard>
    )
}