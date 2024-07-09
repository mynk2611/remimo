import Card from "@repo/ui/card";
import { MoneyIcon } from "@repo/ui/moneyIcon";

export function UnlockedBalance({ unlocked }: { unlocked: number }) {
  return (
    <div className="h-52 flex flex-col justify-center">
      <Card
        title="Unlocked Balance"
        value={`$${unlocked}`}
        color="green"
        gradientFrom="from-green-500"
        gradientTo="to-teal-500"
        width="w-64"
        height="h-36"
        icon={<MoneyIcon/>}
      />
    </div>
  );
}