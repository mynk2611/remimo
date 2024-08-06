"use client";
import React, { useState } from "react";
import { Label } from "@repo/ui/label";
import { Input } from "@repo/ui/input";
import { cn } from "../lib/utils";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setError("");
    try {
      const response = await axios.post("/api/user", {
        name,
        email,
        phoneNumber,
        password
      });
      router.push("/login");
    }catch(error:any){
      if (error.response && error.response.status === 400){
        setError("Phone number already exists");
      }else{
        console.log("Error while creating user account", error);
        setError("Something went wrong. Please try again later");
      }
    }
  }

  return (
    <div className="flex justify-center h-min bg-black spotlight-bg">
      <div className="relative border border-zinc-600 my-8 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black dark:bg-black">
        <div className="flex justify-center">
          <div className="">
            <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-200">
              Join Remimo
            </h2>

          </div>
        </div>
        <div className="flex justify-center">
          <div className="">
            <h2 className="font-bold text-sm text-neutral-200 dark:text-neutral-200">
              Already have an account? <a href="/login" className="text-cyan-500 dark:text-cyan-500">Login</a>
            </h2>

          </div>
        </div>


        <div className="my-8" >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" onChange={(e) => setName(e.target.value)} />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-5">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" onChange={(e) => setEmail(e.target.value)} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-5">
            <div className="flex">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <div className=" text-red-600 ml-1">
                *
              </div>
            </div>
            <Input id="phoneNumber" placeholder="84324XXXXX" type="email" onChange={(e) => setPhoneNumber(e.target.value)} />
          </LabelInputContainer>
          <LabelInputContainer className="mb-5">
            <div className="flex">
              <Label htmlFor="password">Password</Label>
              <div className="text-red-600 ml-1">
                *
              </div>
            </div>
            <Input id="password" placeholder="••••••••" type="password" onChange={(e) => setPassword(e.target.value)} />
          </LabelInputContainer>
          {error && <div className="text-red-600">{error}</div>}
          <button
            className="bg-gradient-to-br bg-zinc-800 relative group/btn from-zinc-900 dark:from-zinc-900 dark:to-zinc-900 to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
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
