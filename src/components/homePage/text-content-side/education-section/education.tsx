"use client";

export default function Education({ className }: { className?: string }) {
  return (
    <div className={`${className} `}>
      <h1 className="text-xl text-center lg:text-start mb-2 font-bold">
        Education
      </h1>
      <div className="lg:text-xl border-2 text-foreground/60  backdrop-blur-sm font-mono  lg:p-3.5 p-2 py-1  w-full">
        <div className="flex justify-between   items-center">
          <div className=" text-[15px]">The NorthCap University - Btech</div>
          <div className=" text-xs justify-end">2022-2026</div>
        </div>
      </div>
    </div>
  );
}
