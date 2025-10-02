"use client";
import { Briefcase, HomeIcon, Phone } from "lucide-react";
import { motion } from "motion/react";
import NavbarButton from "./navbarButton";

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" rounded-full shadow-accent  shadow-2xl"
    >
      <motion.div
        className={` max-w-xs border-2     backdrop-blur-lg  rounded-full lg:h-12 h-[51px] flex gap-1.5 dark:bg-black/60 bg-white/70 p-1 `}
      >
        <NavbarButton href="/" text="Home" icon={<HomeIcon />} />

        <NavbarButton
          href="/work"
          text="Work"
          className=""
          icon={<Briefcase />}
        />
        <NavbarButton href="/contact" text="Contact" icon={<Phone />} />
      </motion.div>
    </motion.div>
  );
}
