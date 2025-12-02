import type React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type HeroTabProps = {
  children: React.ReactNode;
  active?: boolean;
  imgSrc?: string;
  noLine?: boolean;
};

export default function HeroTab({ children, active, imgSrc, noLine }: HeroTabProps) {
  return (
    <button
      className={cn(
        "flex max-md:border max-md:border-gray-200 max-md:after:hidden! flex-col items-center justify-center gap-3 lg:gap-4 px-4 py-5 text-lg font-medium lg:text-3xl xl:text-[2rem] transition-colors bg-white text-gray-900 hover:bg-gray-50 relative",
        noLine
          ? " after:hidden!"
          : " after:content-[''] after:absolute after:min-h-[20px] after:h-[calc(100%-50px)] after:w-[2px] after:bg-gray-200 after:inline-block rtl:after:left-0 ltr:after:right-0 after:top-5 ",
        active &&
          "bg-primary! text-white hover:bg-[#0d4f3a]! ltr:after:right-[-8px]! rtl:after:left-[-8px]!"
      )}
      type="button"
    >
      {imgSrc && (
        <Image
          src={imgSrc}
          alt=""
          width={106}
          height={106}
          className="h-16 w-16 md:h-24 md:w-24 xl:h-26.5 xl:w-26.5"
        />
      )}
      {children}
    </button>
  );
}