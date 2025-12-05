"use client";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import SocialIconButton from "../homePage/text-content-side/social-icon-strip/social-icon-button";

export default function Navbar() {
  return (
    <div className="  shadow-accent  shadow-2xl">
      <div
        className={` w-full border-2     backdrop-blur-lg  lg:h-12 h-[51px] flex gap-1.5  items-center`}
      >
        <SocialIconButton
          href="https://github.com/rishabyd"
          icon={<BsGithub />}
          text="Github"
        />
        <SocialIconButton
          href="https://www.linkedin.com/in/rishabyd"
          icon={<BsLinkedin />}
          text="Linkedin"
        />
        <SocialIconButton
          href="https://x.com/rishabyd"
          icon={<BsTwitterX />}
          text="Twitter"
        />
      </div>
    </div>
  );
}
