import StatusCard from "./statusCard";

export function BankCard({transactions}:{transactions:{
        amount: number,
        status: string,
        date: string,
        provider: string
}}){
    return(
    <div className="grid grid-cols-4 p-2 text-white hover:bg-zinc-800  ">
        <div className="flex flex-col justify-center ">
                <div className="flex ">
                      {transactions.date}
                </div>
        </div>

        <div className="flex flex-col justify-center ">
                <div className="flex ">
                     $ {transactions.amount}
                </div>
        </div>

        <div className="flex flex-col justify-center ">
                <div className="flex ">
                      {transactions.provider}
                </div>
        </div>

        <div className="flex justify-center">
                <StatusCard
                    status={transactions.status}
                    color="lime-400"
                    gradientFrom="from-lime-400"
                    gradientTo="to-lime-500"
                />
        </div>
    </div>
    )
}