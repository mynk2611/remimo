import { getServerSession } from "next-auth";
import { DashboardAppbarClient } from "../../../components/DashboardAppbarClient";
import { Footer } from "../../../components/Footer";
import { PayMoney } from "../../../components/PayMoney";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation"

export default async function P2P() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
    return null
  }

  return (
    <div>
      <div className="spotlight-bg h-max">
        <DashboardAppbarClient />
        <div className="flex justify-center h-min">
          <div className="border rounded-2xl border-zinc-600 p-2 md:p-12 mt-24 mb-14 mx-4 w-11/12">
            <PayMoney />
          </div>
        </div>
      </div>

      <div className='spotlight-bg'>
        <Footer />
      </div>
    </div>
  );
}
