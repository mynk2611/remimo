import { AddMoney } from "../../../components/AddMoney";
import { DashboardAppbarClient } from "../../../components/DashboardAppbarClient";
import { Footer } from "../../../components/Footer";

export default function Transfer() {
  return (
    <div>
      <div className="spotlight-bg h-max">
        <DashboardAppbarClient />
        <div className="flex justify-center h-min">
          <div className="border rounded-2xl p-2 md:p-12 border-zinc-600 mt-24 mb-14 mx-4 w-11/12">
            <AddMoney />
          </div>
        </div>
      </div>

      <div className='spotlight-bg'>
        <Footer />
      </div>
    </div>
  );
}
