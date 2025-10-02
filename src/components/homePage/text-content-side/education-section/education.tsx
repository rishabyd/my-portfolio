"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";

export default function Education({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", y: 50, opacity: 0 }}
      animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`${className} `}
    >
      <h1 className="text-3xl text-center lg:text-start mb-4 font-bold">
        Education
      </h1>
      <div className="lg:h-24 bg-accent/50  backdrop-blur-sm font-mono rounded-2xl lg:p-3.5 p-2 py-1  w-full">
        <div className="flex justify-between h-10 items-center">
          <div className="lg:text-2xl text-[15px]">The NorthCap University</div>
          <div className="lg:text-xl text-xs justify-end">2022-2026</div>
        </div>
        <div>
          <Separator className="w-fit " />
        </div>
        <div className="lg:text-xl flex text-[17px] mt-1.5 items-center ">
          Btech
        </div>
      </div>
    </motion.div>
  );
}
