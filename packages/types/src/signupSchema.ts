import z from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, { message: " Name is required " })
    .max(100, { message: "Name must be less than 100 character " }),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),

  phoneNumber: z
    .string()
    .nonempty("Phone number is required")
    .trim()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  password: z
    .string()
})
