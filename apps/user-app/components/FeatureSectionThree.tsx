"use client";
import React from "react";
import { motion } from "framer-motion";
import Coin from "./coin";
import { LampContainer } from "@repo/ui/lampContainer";

export function FeatureSectionThree() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-1 bg-gradient-to-br  py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className='grid grid-cols-2 pt-20 bg-gradient-to-b  relative'>
          <div className='flex justify-center items-center'>
                <Coin/>
          </div>

          <div className='flex flex-col justify-center w-9/12 relative'>
                <div className='text-5xl text-white font-bold'>
                    Get ready for exciting new feature on Remimo!
                </div>

                <div className='text-lg text-white font- pt-5'>
                Soon, you'll be able to earn Remimo Points on your everyday spend, unlocking incredible rewards like travel perks, exclusive shopping discounts, and more. Stay tuned for the details!
                </div>
          </div>
      </div> 
      </motion.div>
    </LampContainer>
  );
}
