"use client";
import React, { useState } from "react";
import { Label } from "@repo/ui/label";
import { Input } from "@repo/ui/input";
import { cn } from "../lib/utils";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signupSchema } from "@repo/types/signupSchema";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState<any>(null); // For displaying validation errors

  const handleSignup = async () => {
    setError("");
    setValidationErrors(null);

    const result = signupSchema.safeParse({
      name,
      email,
      phoneNumber,
      password,
    });

    if (!result.success) {
      setValidationErrors(result.error.format());
      console.log(result.error.format())
      return;
    }

    try {
      const response = await axios.post("/api/user", {
        name,
        email,
        phoneNumber,
        password,
      });
      router.push("/login");
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setError("Phone number already exists");
      } else {
        console.log("Error while creating user account", error);
        setError("Something went wrong. Please try again later");
      }
    }
  };

  return (
    <div className="flex justify-center bg-black spotlight-bg">
      <div className="flex flex-col min-h-screen overflow-auto justify-center w-full">
        <div className="relative border border-zinc-600 my-8 max-w-md w-10/12 sm:w-6/12 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black dark:bg-black">
          <div className="flex justify-center">
            <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-200">Join Remimo</h2>
          </div>
          <div className="flex justify-center">
            <h2 className="font-bold text-sm text-neutral-200 dark:text-neutral-200">
              Already have an account? <a href="/login" className="text-cyan-500 dark:text-cyan-500">Login</a>
            </h2>
          </div>
          <div className="my-8">
            <div className="mb-5">
              <LabelInputContainer>
                <Label htmlFor="firstname">Name</Label>
                <Input id="firstname" placeholder="Tyler" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                {validationErrors?.name && <p className="text-red-600">{validationErrors.name._errors[0]}</p>}
              </LabelInputContainer>
            </div>
            <div className="mb-5">
              <LabelInputContainer>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {validationErrors?.email && <p className="text-red-600">{validationErrors.email._errors[0]}</p>}
              </LabelInputContainer>
            </div>
            <div className="mb-5">
              <LabelInputContainer>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" placeholder="84324XXXXX" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                {validationErrors?.phoneNumber && <p className="text-red-600">{validationErrors.phoneNumber._errors[0]}</p>}
              </LabelInputContainer>
            </div>
            <div className="mb-5">
              <LabelInputContainer>
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {validationErrors?.password && <p className="text-red-600">{validationErrors.password._errors[0]}</p>}
              </LabelInputContainer>
            </div>
            {error && <div className="text-red-600">{error}</div>}
            <button
              className="bg-gradient-to-br bg-zinc-800 relative group/btn from-zinc-900 dark:from-zinc-900 dark:to-zinc-900 to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
              type="submit"
              onClick={handleSignup}
            >
              Sign up &rarr;
              <BottomGradient />
            </button>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

