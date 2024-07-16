import { PayMoney } from "../../../components/PayMoney";
import { AppbarClient } from "../../../components/appbarClient";

export default function P2P() {
  return (
    <div className="spotlight-bg h-max">
      <div className="flex justify-center">
        <div className="w-10/12 flex justify-center mt-3">
          <AppbarClient />
        </div>
      </div>
      <div className="flex justify-center h-min">
        <div className="border rounded-2xl border-zinc-600 p-10 mt-6 mx-4 w-11/12">
          <PayMoney />
        </div>
      </div>
    </div>
  );
}
