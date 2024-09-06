import { DashboardAppbarClient } from "../../../components/DashboardAppbarClient";
import { BalancesCards } from "../../../components/BalanceCards";
import { AllTxns } from "../../../components/AllTxns";
import { getBalance } from "../../../utils/getBalance"
import { getBankTransactions } from "../../../utils/getBankTransactions";
import { getPhoneTransaction } from "../../../utils/getPhoneTransactions";



export default async function dashboard() {
  const balance = await getBalance();
  const BankTransactions = await getBankTransactions();
  const PhoneTransaction = await getPhoneTransaction();

  return (
    <div className="spotlight-bg h-max ">
      <DashboardAppbarClient />

      <div className="flex justify-center h-min">
        <div className="border rounded-2xl border-zinc-600 p-5 sm:p-10 md:p-5 lg:p-10 xl:p-10 mt-24 mx-4 w-11/12">
          <BalancesCards balance={balance} />
          <AllTxns PhoneTransactions={PhoneTransaction} BankTransactions={BankTransactions} />
        </div>
      </div>
    </div>
  );
}
