import { BankCard } from "@repo/ui/bankCard"
import { TransferCard } from "@repo/ui/transferCard"

export function BankTransfer({ transactions }: {
    transactions: {
        amount: number,
        status: string,
        date: string,
        provider: string
    }[]
}) {
    if(!transactions.length){
        return(
        <TransferCard title="Bank-to-Wallet Transaction">
            <div className="flex justify-center  min-h-40">
                <div className="flex flex-col justify-center text-white">
                        No Recent Transactions
                </div>
            </div>
        </TransferCard>
        )
    }
    return (
    <TransferCard title="Bank-to-Wallet Transaction">
        {transactions.map( t => <BankCard transactions={t} />)}
    </TransferCard>
    )
}