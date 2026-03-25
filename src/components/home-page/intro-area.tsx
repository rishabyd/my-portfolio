export default function IntroArea({ className }: { className?: string }) {
  return (
    <div className={`${className} gap-5 font-mono lg:flex`}>
      <div className="w-full">
        <h1 className="text-3xl leading-none font-black tracking-tight uppercase sm:text-4xl lg:text-5xl">
          Rishab Yadav
        </h1>

        <p className="mt-3 max-w-xl text-base leading-relaxed font-medium sm:text-lg">
          {`I build things, write about ideas, and watch films most people haven't heard of.`}
        </p>
      </div>
    </div>
  )
}
