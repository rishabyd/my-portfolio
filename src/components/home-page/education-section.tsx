export default async function Education({ className }: { className?: string }) {
  return (
    <div className={`${className} `}>
      <h1 className="mb-2 text-lg font-bold lg:text-start lg:text-xl">
        Education
      </h1>
      <div className="w-full rounded-none border-[5px] border-foreground px-3 py-2 font-mono">
        <div className="flex flex-col gap-1 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <div className="font-bold">
            The NorthCap University - B.Tech (CSE)
          </div>
          <div className="font-bold sm:text-right">2022 - 2026</div>
        </div>
      </div>
    </div>
  )
}
