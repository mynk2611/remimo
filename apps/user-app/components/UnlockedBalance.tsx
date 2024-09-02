import Card from "@repo/ui/card";
import { MoneyIcon } from "@repo/ui/moneyIcon";

export function UnlockedBalance({ unlocked }: { unlocked: number }) {
  return (
    <div className="md:h-52 flex flex-col justify-center">
      <Card
        title="Unlocked Balance"
        value={unlocked / 100}
        color="green"
        gradientFrom="from-green-500"
        gradientTo="to-teal-500"
        width="w-[16rem]"
        height="h-36"
        mt="mt-10"
        icon={<MoneyIcon className="size-20 mt-5" />}
      />
    </div>
  );
}
