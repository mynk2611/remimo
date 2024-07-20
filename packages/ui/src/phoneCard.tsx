import { transactionType, transactionStatus } from "@prisma/client";
import StatusCard from "./statusCard";
import { CreditIcon } from "./creditIcon";
import { DebitIcon } from "./debitIcon";

interface TransactionProps {
    amount: number;
    status: transactionStatus;
    date: Date;
    type: transactionType;
    fromUserName: string | null;
    toUserName: string | null;
}

export function PhoneCard({ transactions }: { transactions: TransactionProps }) {
    return (
        <div className="grid grid-cols-4 p-2 text-white hover:bg-zinc-800 border-b border-zinc-600 pt-3">
            <div className="flex ">
                <div className="flex flex-col  ">
                    <div className="flex">
                        <div className="text-xl">
                            {transactions.type === 'Credit' ? 'Credit' : 'Debit'}
                        </div>

                        <div className="ml-2 mt-1">
                            {transactions.type === 'Credit' ? <CreditIcon/> : <DebitIcon/>}
                        </div>
                    </div>

                    <div className="text-xs">
                        {new Date(transactions.date).toLocaleDateString()}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center ">
                <div className="flex justify-center">
                    {transactions.type === 'Credit' ? transactions.fromUserName : transactions.toUserName}
                </div>
            </div>

            <div className="flex flex-col justify-center ">
                <div className="flex justify-center">
                    $ {transactions.amount}
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <div className="flex justify-center">
                    <StatusCard
                        status={transactions.status}
                        color="lime-400"
                        gradientFrom="from-lime-400"
                        gradientTo="to-lime-500"
                    />
                </div>
            </div>
        </div>
    );
}
