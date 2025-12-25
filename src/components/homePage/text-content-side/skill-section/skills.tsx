import clsx from "clsx";

const SkillIcons = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "PostgreSQL" },
];

export async function SkillColumn({
  iconsArray,
  className,
}: {
  iconsArray: {
    name: string;
    className?: string;
  }[];
  className?: string;
}) {
  return (
    <div
      className={`${className} flex text-foreground/60 lg:text-sm font-mono text-xs md:justify-start flex-wrap gap-1.5 `}
    >
      {iconsArray.map((icon) => (
        <div
          key={icon.name}
          className={clsx(
            " border-2 ",
            className,
            " flex   items-center  px-2 py-1 w-fit ",
          )}
        >
          {icon.name}
        </div>
      ))}
    </div>
  );
}

export default async function SkillsArea({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`${className} `}>
      <h1 className="lg:text-xl text-lg  lg:text-start mb-2 font-bold">
        Skills
      </h1>
      <div className=" ">
        <SkillColumn iconsArray={SkillIcons} />
      </div>
    </div>
  );
}
