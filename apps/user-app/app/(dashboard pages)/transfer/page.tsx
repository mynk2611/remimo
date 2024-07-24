import { AddMoney } from "../../../components/AddMoney";
import { DashboardAppbarClient } from "../../../components/DashboardAppbarClient";

export default function Transfer() {
  return (
    <div className="spotlight-bg h-max">
      <DashboardAppbarClient/>
      <div className="flex justify-center h-min">
        <div className="border rounded-2xl border-zinc-600 p-10 mt-24 mx-4 w-11/12">
          <AddMoney />
        </div>
      </div>
    </div>
  );
}
