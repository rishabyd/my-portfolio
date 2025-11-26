"use client";
import { Briefcase, HomeIcon, Phone } from "lucide-react";
import NavbarButton from "./navbarButton";

export default function Navbar() {
  return (
    <div
      className="  shadow-accent  shadow-2xl"
    >
      <div
        className={` max-w-xs border-2     backdrop-blur-lg  lg:h-12 h-[51px] flex gap-1.5 dark:bg-black/60 bg-white/70 p-1 `}
      >
        <NavbarButton href="/" text="Home" icon={<HomeIcon />} />

        <NavbarButton
          href="/work"
          text="Work"
          className=""
          icon={<Briefcase />}
        />
        <NavbarButton href="/contact" text="Contact" icon={<Phone />} />
      </div>
    </div>
  );
}
