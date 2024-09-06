import Card from "@repo/ui/card";
import { LockedIcon } from "@repo/ui/lockedIcon";

export function LockedBalance({ locked }: { locked: number }) {
  return (
    <div className="h-52 flex flex-col justify-center">
      <Card
        title="Locked Balance"
        value={locked / 100}
        color="purple"
        gradientFrom="from-purple-500"
        gradientTo="to-indigo-500"
        width="w-[16rem] md:w-[12rem] lg:w-[16rem] xl:w-[20rem]"
        height="h-36 md:h-28 lg:h-32 xl:h-40"
        mt="mt-10 md:mt-8 lg:mt-10 xl:mt-16"
        icon={<LockedIcon className="size-20 md:size-12 lg:size-16 mt-5 md:mt-4 xl:mt-10" />}
      />
    </div>
  );
}
