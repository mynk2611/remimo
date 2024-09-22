
import { Boxes } from "@repo/ui/background-boxes";
import { MoneyTransferCard } from "@repo/ui/moneyTransferCard";
import { FormPayMoney } from "./FormPayMoney"; // Client-side form

export function PayMoney() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-zinc-800 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="relative w-10/12 md:w-7/12 lg:w-5/12 rounded-lg shadow-lg p-4 bg-black text-white overflow-hidden z-40">
        <MoneyTransferCard title="Pay money">
          {/* Move all client-side logic to PayMoneyForm */}
          <FormPayMoney />
        </MoneyTransferCard>
      </div>
    </div>
  );
}


