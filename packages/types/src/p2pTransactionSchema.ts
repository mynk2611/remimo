import z from "zod";

export const p2pTransactionSchema = z.object({
  phoneNumber: z
    .string()
    .nonempty("Phone number is required")
    .trim()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  amount: z
    .string()
    .nonempty("Amount is required")
    .regex(/^\d+$/, "Amount must be a numeric value")
    .transform((val) => Number(val))
    .refine((val) => val > 0, "Amount must be a positive number")
    .refine((val) => val <= 100000, "Amount cannot exceed 100,000")
});
