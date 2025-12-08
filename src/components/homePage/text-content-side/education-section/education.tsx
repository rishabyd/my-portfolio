"use client";

export default function Education({ className }: { className?: string }) {
  return (
    <div className={`${className} `}>
      <h1 className="lg:text-xl text-lg  lg:text-start mb-2 font-bold">
        Education
      </h1>
      <div className=" border-2 text-foreground/60   font-mono px-2 py-1 w-full">
        <div className="flex justify-between lg:text-sm text-xs  items-center">
          <div className=" ">The NorthCap University - Btech</div>
          <div className="  justify-end">2022-2026</div>
        </div>
      </div>
    </div>
  );
}
