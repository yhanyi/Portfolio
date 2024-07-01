import React from "react";
import Image from "next/image";

type SkillHoverProps = {
  srclight: string;
  srcdark: string;
  width: number;
  height: number;
  title: string;
};

export default function SkillHover({
  srcdark,
  srclight,
  width,
  height,
  title,
}: SkillHoverProps) {
  return (
    <div className="flex items-center justify-center group relative w-full">
      <Image
        src={srclight}
        width={width}
        height={height}
        alt="Skill"
        className="flex dark:hidden items-center justify-center hover:scale-110 duration-300"
      />
      <Image
        src={srcdark}
        width={width}
        height={height}
        alt="Skill"
        className="hidden dark:flex items-center justify-center hover:scale-110 duration-300"
      />
      <span
        className="absolute top-6 md:top-8 left-[50%] -translate-x-[50%] 
        z-20 origin-center scale-0 p-1 rounded-lg border border-gray-500 
        bg-white dark:bg-black text-black dark:text-white text-xs md:text-sm
        shadow-md transition-all duration-300 ease-in-out 
        group-hover:scale-100 whitespace-nowrap"
      >
        {title}
      </span>
    </div>
  );
}
