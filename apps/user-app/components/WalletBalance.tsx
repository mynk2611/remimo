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
        width="w-[18rem]"
        height="h-40"
        mt="mt-20"
        icon={<WalletIcon className="size-20 mt-10" />}
      />
    </div>
  );
}
