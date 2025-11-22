"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CustomBtnLinkProps = {
  children: React.ReactNode;
  className?: string;
  iconSrc?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconPriority?: boolean;
  href?: string;
  type?: "button" | "submit" | "reset";
  Com?: "button" | typeof Link;
};

export function CustomBtnLink({
  children,
  className = "",
  iconSrc,
  iconAlt = "",
  iconWidth = 23,
  iconHeight = 23,
  iconPriority = false,
  Com = "button",
  ...props
}: CustomBtnLinkProps) {
  const baseClasses =
    "inline-flex items-center gap-2 bg-primary text-sm font-semibold text-white transition-colors hover:bg-[#0d4f3a]";

  const classes = cn(baseClasses, className);

  const Component = Com as React.ElementType;

  const icon =
    iconSrc != null ? (
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={iconWidth}
        height={iconHeight}
        priority={iconPriority}
      />
    ) : null;

  return (
    <Component className={classes} {...props}>
      {children}
      {icon}
    </Component>
  );
}
