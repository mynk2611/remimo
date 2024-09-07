"use client"
import { Boxes } from "@repo/ui/background-boxes"
import { MoneyTransferCard } from "@repo/ui/moneyTransferCard"
import { TextInput } from "@repo/ui/textInput"
import { Select } from "@repo/ui/select"
import { useState } from "react";
import { createonRampTransactions } from "../app/lib/actions/createonRampTransactions"
import { useRouter } from "next/navigation"

const SUPPORTED_BANKS = [{
  name: "HDFC Bank",
  redirectUrl: "https://netbanking.hdfcbank.com"
}, {
  name: "Axis Bank",
  redirectUrl: "https://www.axisbank.com/"
}];

export function AddMoney() {
  const route = useRouter();
  const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
  const [value, setValue] = useState(0);
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");

  return (
    <div className="relative w-full h-screen overflow-hidden bg-zinc-800 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className={`relative w-10/12 md:w-7/12 lg:w-5/12 rounded-lg shadow-lg p-4 bg-black text-white overflow-hidden z-40`} >
        <MoneyTransferCard title="Add Money">
          <TextInput
            label="Amount"
            onChange={(value) => {
              setValue(Number(value))
            }}
            placeholder="Enter amount" />

          <div className="text-white w-full pt-3 sm:pl-5">
            Bank
          </div>

          <Select onSelect={(value) => {
            setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
            setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name || "")
          }} options={SUPPORTED_BANKS.map(x => ({
            key: x.name,
            value: x.name
          }))} />

          <div className="flex justify-center mt-10">
            <button className="shadow-[inset_0_0_0_2px_#616467] text-white px-10 sm:px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white  transition duration-200"
              onClick={async () => {
                await createonRampTransactions(provider, value);
                window.location.href = "/dashboard";
              }}>
              Add to Wallet
            </button>
          </div>
        </MoneyTransferCard>
      </div>
    </div>
  )
}
