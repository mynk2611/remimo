"use client";
import React, { useState } from "react";
import { Label } from "@repo/ui/label";
import { Input } from "@repo/ui/input";
import { cn } from "../lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Added error state

  // Added handleLogin function to handle form submission
  const handleLogin = async () => {
    setError("");

    const res = await signIn("credentials", {
      phone: phoneNumber,
      password: password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid phone number or password");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center bg-black spotlight-bg">
      <div className="flex flex-col min-h-screen overflow-auto justify-center w-full ">
        <div className="mt-10 relative border border-zinc-600 my-8 w-10/12 sm:w-6/12 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black dark:bg-black">
          <div className="flex justify-center">
            <div>
              <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-200">
                Welcome Back to Remimo
              </h2>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h2 className="font-bold text-sm text-neutral-200 dark:text-neutral-200">
                Create an account? <a href="/signup" className="text-cyan-500 dark:text-cyan-500">Signup</a>
              </h2>
            </div>
          </div>

          <div className="my-8">
            <LabelInputContainer className="mb-5">
              <div className="flex">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="text-red-600 ml-1">*</div>
              </div>
              <Input id="phone" placeholder="84324XXXXX" type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
            </LabelInputContainer>
            <LabelInputContainer className="mb-5">
              <div className="flex">
                <Label htmlFor="password">Password</Label>
                <div className="text-red-600 ml-1">*</div>
              </div>
              <Input id="password" placeholder="••••••••" type="password" onChange={(e) => setPassword(e.target.value)} />
            </LabelInputContainer>
            {error && <p className="text-red-600">{error}</p>} {/* Added error message display */}
            <button
              className="bg-gradient-to-br bg-zinc-800 relative group/btn from-zinc-900 dark:from-zinc-900 dark:to-zinc-900 to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              onClick={handleLogin}
            >
              Log in &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-700 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
              <button
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="button"
                onClick={async () => {
                  await signIn("github")
                }}
              >
                <IconBrandGithub className="h-4 w-4 text-neutral-300 dark:text-neutral-300" />
                <span className="text-neutral-300 dark:text-neutral-300 text-sm">GitHub</span>
                <BottomGradient />
              </button>
              <button
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="button"
                onClick={async () => {
                  await signIn("google");
                }}
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-300 dark:text-neutral-300" />
                <span className="text-neutral-300 dark:text-neutral-300 text-sm">Google</span>
                <BottomGradient />
              </button>
            </div>
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

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
