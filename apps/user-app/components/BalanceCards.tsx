import { LockedBalance } from "./LockedBalance";
import { UnlockedBalance } from "./UnlockedBalance";
import WalletBalance from "./WalletBalance";

export function BalancesCards({ balance }: {
  balance: {
    amount: number,
    locked: number
  }
}) {
  return (
    <div className="flex flex-col items-center md:flex-row sm:justify-evenly p-0 md:p-0 mb-16 sm:mb-20 mt-10 sm:mt-14">

      <WalletBalance amount={balance.amount} />

      <LockedBalance locked={balance.locked} />

      <UnlockedBalance unlocked={balance.amount - balance.locked} />

    </div>
  )
}
