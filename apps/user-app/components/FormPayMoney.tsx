
"use client";

import { TextInput } from "@repo/ui/textInput";
import { HandlePayMoneyButton } from "./HandlePayMoneyButton";
import { HandlePayment } from "./HandlePayment";

export function FormPayMoney() {
  const { setNumber, setAmount, errors, handlePay } = HandlePayment();

  return (
    <>
      <TextInput
        label="Number"
        onChange={(val) => setNumber(val)}
        placeholder="Enter phone number"
      />
      {errors.phoneNumber && <p className="text-red-500 text-sm sm:pl-5">{errors.phoneNumber}</p>}

      <TextInput
        label="Amount"
        onChange={(val) => setAmount(val)}
        placeholder="Enter amount"
      />
      {errors.amount && <p className="text-red-500 text-sm sm:pl-5">{errors.amount}</p>}

      <div className="flex justify-center mt-6">
        <HandlePayMoneyButton onClick={handlePay} />
      </div>
    </>
  );
}
