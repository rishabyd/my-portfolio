"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
interface SocialButtonProps extends React.ComponentProps<typeof Button> {
  className?: string;
  icon: React.ReactNode;
  text: string;
  href: string;
}
export default function SocialIconButton({
  icon,
  text,
  className,
  href,
  ...props
}: SocialButtonProps) {
  return (
    <Button
      variant={"outline"}
      className={` ${className} font-mono  px-3 lg:py-5 h-10 w-fit  lg:h-10 cursor-pointer items-center`}
      {...props}
      asChild
    >
      <Link
        className=" h-full lg:scale-100 scale-[110%] "
        target="_blank"
        href={href}
      >
        <div className=" dark:text-white! place-content-center  lg:scale-100 scale-[110%]  text-black!">
          {icon}
        </div>
        <div className="hidden text-lg md:block">{text}</div>
      </Link>
    </Button>
  );
}
