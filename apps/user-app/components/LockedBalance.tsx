import Card from "@repo/ui/card";
import { LockedIcon } from "@repo/ui/lockedIcon";

export function LockedBalance({ locked }: { locked: number }) {
  return (
    <div className="h-52 flex flex-col justify-center">
      <Card
        title="Locked Balance"
        value={locked/100}
        color="purple"
        gradientFrom="from-purple-500"
        gradientTo="to-indigo-500"
        width="w-72"
        height="h-40"
        mt="mt-10"
        icon={<LockedIcon/>}
      />
    </div>
  );
}