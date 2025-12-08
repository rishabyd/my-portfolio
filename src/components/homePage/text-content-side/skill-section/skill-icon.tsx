"use client";

import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import React from "react";
export interface SkillIconProps {
  name: string;
  className?: string;
  icon?: React.ReactNode;
}
export default function SkillIcon({ name, className, icon }: SkillIconProps) {
  return (
    <Badge
      className={clsx(
        " border-2 ",
        className,
        "flex justify-center bg-transparent text-foreground/60 font-mono items-center gap-2 px-2  w-fit h-7",
      )}
      variant="outline"
    >
      <div className="lg:text-sm text-xs text-center">{name}</div>
      {icon && <div className="scale-150 w-3 text-center h-3">{icon}</div>}
    </Badge>
  );
}
