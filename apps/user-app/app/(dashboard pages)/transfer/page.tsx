import { AddMoney } from "../../../components/AddMoney";
import { AppbarClient } from "../../../components/appbarClient";

export default function Transfer() {
  return (
    <div className="spotlight-bg h-max">
      <div className="flex justify-center">
        <div className="w-10/12 flex justify-center mt-3">
          <AppbarClient />
        </div>
      </div>
      <div className="flex justify-center h-min">
        <div className="border rounded-2xl border-zinc-600 p-10 mt-6 mx-4 w-11/12">
          <AddMoney />
        </div>
      </div>
    </div>
  );
}
