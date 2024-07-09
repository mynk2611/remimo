import Card from "@repo/ui/card";
import { LockedIcon } from "@repo/ui/lockedIcon";

export function LockedBalance({ locked }: { locked: number }) {
  return (
    <div>
      <Card
        title="Locked Balance"
        value={`$${locked}`}
        color="purple"
        gradientFrom="from-purple-500"
        gradientTo="to-indigo-500"
        width="w-64"
        height="h-36"
        icon={<LockedIcon/>}
      />
    </div>
  );
}