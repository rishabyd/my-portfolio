export default async function SkillsArea({
  className,
}: {
  className?: string
}) {
  return (
    <div className={`${className}`}>
      <h1 className="mb-2 text-lg font-bold lg:text-start lg:text-xl">
        Skills
      </h1>
      <div className="w-full border-[5px] border-foreground px-3 py-2 font-mono">
        <p className="text-xs font-bold tracking-wide uppercase sm:text-sm">
          React • Next.js • TypeScript • PostgreSQL
        </p>
      </div>
    </div>
  )
}
