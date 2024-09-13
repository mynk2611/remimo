"use client"
import { useState } from "react";
import { createp2pTransaction } from "../app/lib/actions/createp2pTransaction";
import { Boxes } from "@repo/ui/background-boxes";
import { MoneyTransferCard } from "@repo/ui/moneyTransferCard";
import { TextInput } from "@repo/ui/textInput";
import { p2pTransactionSchema } from "@repo/types/p2pTransactionSchema";

export function PayMoney() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState<{ phoneNumber?: string; amount?: string }>({}); // Store validation errors

  const handlePay = async () => {
    const result = p2pTransactionSchema.safeParse({ phoneNumber: number, amount });

    if (!result.success) {

      const validationErrors: any = {};
      result.error.errors.forEach((error) => {
        const path = error.path[0]; // Extract the path
        if (path) { // Ensure the path exists before using it
          validationErrors[path] = error.message;
        }
      });
      setErrors(validationErrors);

      return;
    }

    setErrors({});

    try {
      await createp2pTransaction(number, Number(amount));
      window.location.href = "/dashboard"; // Redirect to dashboard after successful payment
    } catch (err) {
      console.error("Transaction failed", err);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-zinc-800 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="relative w-10/12 md:w-7/12 lg:w-5/12 rounded-lg shadow-lg p-4 bg-black text-white overflow-hidden z-40">
        <MoneyTransferCard title="Pay money">
          <TextInput
            label="Number"
            onChange={(val) => setNumber(val)}
            placeholder="Enter phone number"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm sm:pl-5">{errors.phoneNumber}</p>} {/* Display phone number error */}

          <TextInput
            label="Amount"
            onChange={(val) => setAmount(val)}
            placeholder="Enter amount"
          />
          {errors.amount && <p className="text-red-500 text-sm sm:pl-5">{errors.amount}</p>} {/* Display amount error */}

          <div className="flex justify-center mt-6">
            <button
              className="shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200"
              onClick={handlePay}
            >
              Pay
            </button>
          </div>
        </MoneyTransferCard>
      </div>
    </div>
  );
}

