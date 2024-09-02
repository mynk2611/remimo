import StatusCard from "./statusCard";
import { onrampStatus } from "@prisma/client";

const statusColor = {
  success: {
    color: "lime-400",
    gradientFrom: "from-lime-400",
    gradientTo: "to-lime-500"
  },
  pending: {
    color: "blue-400",
    gradientFrom: "from-blue-400",
    gradientTo: "to-blue-500"
  },
  failure: {
    color: "red-400",
    gradientFrom: "from-red-400",
    gradientTo: "to-red-500"

  }
}


export function BankCard({ transactions }: {
  transactions: {
    amount: number,
    status: onrampStatus,
    date: Date,
    provider: string
  }
}) {

  const { status } = transactions;
  const { color, gradientFrom, gradientTo } = statusColor[status];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 p-2 text-white hover:bg-zinc-800 relative text-zinc-600 ">
      <div className="hidden sm:block flex flex-col justify-center ">
        <div className="flex ">
          {transactions.date.toDateString()}
        </div>
      </div>

      <div className="flex flex-col justify-center ">
        <div className="flex sm:justify-end">
          $ {transactions.amount / 100}
        </div>
      </div>

      <div className="flex flex-col justify-center ">
        <div className="flex justify-end">
          {transactions.provider}
        </div>
      </div>

      <div className="flex justify-end">
        <StatusCard
          status={transactions.status}
          color={color}
          gradientFrom={gradientFrom}
          gradientTo={gradientTo}
        />
      </div>
    </div>
  )
}
