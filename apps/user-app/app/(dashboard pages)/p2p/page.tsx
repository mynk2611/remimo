import { DashboardAppbarClient } from "../../../components/DashboardAppbarClient";
import { PayMoney } from "../../../components/PayMoney";

export default function P2P() {
  return (
    <div className="spotlight-bg h-max">
      <DashboardAppbarClient/>
      <div className="flex justify-center h-min">
        <div className="border rounded-2xl border-zinc-600 p-10 mt-24 mx-4 w-11/12">
          <PayMoney />
        </div>
      </div>
    </div>
  );
}
