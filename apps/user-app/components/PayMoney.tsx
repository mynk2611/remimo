"use client"
import { Boxes } from "@repo/ui/background-boxes"
import { MoneyTransferCard } from "@repo/ui/moneyTransferCard"
import { TextInput } from "@repo/ui/textInput"
import { useState } from "react"
import { createp2pTransaction } from "../app/lib/actions/createp2pTransaction"

export function PayMoney() {
  const [number, setNumber] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <div className="relative w-full h-screen overflow-hidden bg-zinc-800 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className={`relative w-10/12 md:w-7/12 lg:w-5/12 rounded-lg shadow-lg p-4 bg-black text-white overflow-hidden z-40`} >
        <MoneyTransferCard title="Pay money">
          <TextInput
            label="Number"
            onChange={(val) => {
              setNumber(val);
            }}
            placeholder="Enter phone number" />

          <TextInput
            label="Amount"
            onChange={(val) => {
              setAmount(val);
            }}
            placeholder="Enter amount" />

          <div className="flex justify-center mt-6">
            <button className="shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white  transition duration-200"
              onClick={async () => {
                await createp2pTransaction(number, Number(amount));
                window.location.href = "/dashboard";
              }}>
              Pay
            </button>
          </div>
        </MoneyTransferCard>
      </div>
    </div>
  )
}
