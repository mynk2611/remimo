import z from "zod";

export const amountSchema = z
  .number()
  .positive("Amount must be a positive number")
  .max(100000, "Amount cannot exceed 100,000");

export function validateAmount(value: number) {
  try {
    amountSchema.parse(value);
    return { success: true }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0]?.message || "Invalid Input" };
    }
    return { success: false, error: "An unexpected error occured " };
  }
} 
