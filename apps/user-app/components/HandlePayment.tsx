"use client"
import { useState } from "react";
import { createp2pTransaction } from "../app/lib/actions/createp2pTransaction";
import { p2pTransactionSchema } from "@repo/types/p2pTransactionSchema";

export const HandlePayment = () => {
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
      setErrors({ amount: "Transaction failed, please try again." });
      console.error("Transaction failed", err);
    }
  };

  return { number, setNumber, amount, setAmount, errors, setErrors, handlePay }
}
