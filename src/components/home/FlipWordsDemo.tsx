import React from "react";
import { FlipWords } from "../ui/flip-words";
import Image from "next/image";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

export function FlipWordsDemo() {
  const words = ["repay", "resolve", "conquer"];

  return (
    <div className="pt-4  flex flex-col justify-center items-center px-4 mb-0 md:mb-20">
      <div className=" flex lg:flex-row flex-col items-center justify-center gap-8 md:gap-12 ">
        
      
        <div className="w-full text-center md:text-left h-48 text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <span className="text-gray-800 ">Lending Hand Debt Solutions</span> is here <br /> 
          to help you
          <FlipWords words={words} /> 
          debt.
        </div>
        <Image 
          src={"/full_logo.png"} 
          alt={"Lending Hand Debt Logo"} 
          width={200} 
          height={200} 
          className="w-64 h-64"
        />
      </div>
     
    </div>
  );
}
