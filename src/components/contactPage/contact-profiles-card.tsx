"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import SocialIconButton from "../homePage/text-content-side/social-icon-strip/social-icon-button";

export default function ContactProfilesCard() {
  return (
    <motion.div
      transition={{ duration: 0.8, ease: "easeInOut" }}
      initial={{
        opacity: 0,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      className={`font-mono   w-fit
         p-6   h-fit`}
    >
      <h1 className=" lg:text-xl text-[16px] lg:text-start text-center font-extralight">
        I create beautiful, organized websites and web applications that empower
        you with full ownership and easy maintenance.
        <div className="text-foreground/60 mt-6">Reach out to learn more.</div>
      </h1>
      <h2 className="lg:text-lg lg:block flex justify-center text-sm mt-6">
        {`Email: `}
        <Link
          className="dark:hover:text-blue-400  hover:text-blue-800 hover:underline-offset-2 duration-500 underline underline-offset-4 lg:text-lg text-[17px] "
          href={`mailto:hello@rishabyadav.com?subject=New%20Website%20/ %20Web%20App%20Project%20Inquiry&body=Hello,%0D%0A%0D%0AI'm%20reaching%20out%20from%20your%20website%20to%20discuss%20a%20potential%20project.%0D%0A%0D%0AHere%20are%20some%20initial%20details%20about%20what%20I'm%20looking%20for:%0D%0A%0D%0A1.%20Type%20of%20project:%0D%0A2.%20Brief%20description:%0D%0A3.%20Any%20specific%20features%20or%20technologies%20in%20mind:%0D%0A%0D%0AThank%20you!`}
        >
          hello@rishabyadav.com
        </Link>
      </h2>
      <div className="mt-8 gap-4  lg:gap-2.5 justify-center lg:justify-start flex">
        <SocialIconButton
          className=" lg:scale-100 scale-110 "
          href="https://x.com/rishabyadav_dev"
          icon={<BsTwitterX />}
          text="Twitter"
        />
        <SocialIconButton
          className="lg:scale-100 scale-110"
          href="https://www.linkedin.com/in/rishabyadav-dev/"
          icon={<BsLinkedin />}
          text="Linkedin"
        />
      </div>
    </motion.div>
  );
}
