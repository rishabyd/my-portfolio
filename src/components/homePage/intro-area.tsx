"use client";

import SocialIconList from "./text-content-side/social-icon-strip/social-icon-list";

export default function IntroArea({ className }: { className?: string }) {
  return (
    <div
      className={`${className} font-mono`}
    >
      <h1 className="leading-none font-sans lg:mt-4 mt-4  font-semibold lg:text-[85px] flex justify-center sm:justify-normal text-[40px]">
        Rishab Yadav
      </h1>
      <h2 className="ml-1   h-fit lg:text-accent-foreground/70 text-accent-foreground md:text-4xl text-xl flex opacity-70 justify-center md:justify-normal ">
        Full Stack Web Developer
      </h2>

      <SocialIconList />
      <p className="  lg:text-start text-center mb-6 text-xl">
        {`I love building cool stuff and experimenting with new ideas. I've worked on a variety of projects.`}
      </p>
    </div>
  );
}
