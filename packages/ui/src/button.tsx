"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: ()=>void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-cyan-400 border border-black  text-black rounded-lg font-bold transform hover:-translate-y-0.5 transition duration-400">
      {children}
    </button>
  );
};
