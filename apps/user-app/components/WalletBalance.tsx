import Card from "@repo/ui/card";
import { WalletIcon } from "@repo/ui/walletIcon";

export default function WalletBalance({ amount }: { amount: number }) {
  return (
    <div>
      <Card
        title="Wallet"
        value={amount / 100}
        color="purple"
        gradientFrom="from-pink-500"
        gradientTo="to-red-700"
        dateRange="Jan 1 - Jan 10"
        width="w-[18rem] md:w-[15rem] lg:w-[18rem] xl:w-[22rem]"
        height="h-40 md:h-36 lg:h-40 xl:h-48"
        mt="mt-20 md:mt-14 lg:mt-18 xl:mt-24"
        icon={<WalletIcon className="size-20 md:size-16 lg:size-20 xl:size-24 mt-10 md:mt-8 xl:mt-12" />}
      />
    </div>
  );
}
