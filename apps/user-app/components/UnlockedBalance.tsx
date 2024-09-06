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
        width="w-[16rem] md:w-[12rem] lg:w-[16rem] xl:w-[20rem]"
        height="h-36 md:h-28 lg:h-32 xl:h-40"
        mt="mt-10 md:mt-8 lg:mt-10 xl:mt-16"
        icon={<MoneyIcon className="size-20 md:size-12 lg:size-16 xl:size-18 mt-5 md:mt-4 xl:mt-10" />}
      />
    </div>
  );
}
