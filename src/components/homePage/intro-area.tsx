"use client";

import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import SocialIconButton from "./text-content-side/social-icon-strip/social-icon-button";
import { Button } from "../ui/button";
import Link from "next/link";

export default function IntroArea({ className }: { className?: string }) {
  return (
    <div className={`${className} font-mono lg:flex gap-5`}>
      <div className="">
        <h1 className="leading-none font-sans lg:mt-0 mt-4  font-semibold lg:text-4xl flex justify-center sm:justify-normal text-4xl">
          Rishab Yadav
        </h1>

        <p className=" mt-3 lg:text-start text-foreground/60 text-center font-extralight  text-lg">
          {`I love building cool stuff and experimenting with new ideas. I've worked on a variety of projects.`}
        </p>
        <div className={` w-full  pt-4 pb-10  flex   items-center`}>
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
          <Button variant={"link"}>
            <Link
              className="hidden lg:block"
              href="mailto:rishabyd47@gmail.com"
            >
              rishabyd47@gmail.com
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
