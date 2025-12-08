"use client";

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
      </div>
    </div>
  );
}
