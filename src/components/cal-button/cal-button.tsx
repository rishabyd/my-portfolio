"use client";

import { getCalApi } from "@calcom/embed-react";
import { CalendarRange } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function CalButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "auto",
        styles: {
          branding: { brandColor: "#000000" },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <motion.button
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      data-cal-link="rishabyd"
      className="cursor-pointer
                 lg:px-4 py-2 px-3
                 dark:bg-foreground/10 bg-foreground/30 border hover:border border-foreground/50
                 lg:text-xl not-first:text-lg text-white font-semibold rounded-xl hover:rounded-3xl shadow-md
                 items-center  place-content-center flex gap-2
                 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-75

                 transition-all duration-500 ease-in-out
                 hover:px-5
                 dark:hover:bg-accent/50 hover:bg-foreground/60"
    >
      <CalendarRange className="pointer-events-none" />
      Schedule a call
    </motion.button>
  );
}
