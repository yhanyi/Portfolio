"use client";

import { useActiveSectionContext } from "@/components/active-section-context";
import LinksBar from "@/components/links-bar";
import ScrambledText from "@/components/scrambled-text";
import ThreeGradient from "@/components/three-gradient";
import Link from "next/link";
import React from "react";

export default function Home() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleLinkClick = () => {
    setActiveSection("About");
    setTimeOfLastClick(Date.now());
  };

  return (
    <main>
      <ThreeGradient />
      <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4">
        <div className="group relative px-4 py-2 font-medium transition-colors duration-[400ms]">
          <span>
            <ScrambledText
              text="Yeoh Han Yi"
              speed={50}
              className="!text-xl !sm:text-2xl bg-opacity-50"
              textOptions="bg-gradient-to-r from-primary to-primaryDark bg-clip-text text-transparent"
            />
          </span>
          <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary dark:bg-primaryDark transition-all duration-100 group-hover:w-full" />
          <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary dark:bg-primaryDark transition-all delay-100 duration-100 group-hover:h-full" />
          <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary dark:bg-primaryDark transition-all delay-200 duration-100 group-hover:w-full" />
          <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary dark:bg-primaryDark transition-all delay-300 duration-100 group-hover:h-full" />
        </div>

        <LinksBar />
      </div>

      <Link href="/about" onClick={handleLinkClick}>
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="font-mono px-10 border border-dark dark:border-light bg-light dark:bg-dark h-[50px] flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 active:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-primary before:to-primaryDark before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-dark dark:text-light">
            Enter
          </button>
        </div>
      </Link>
    </main>
  );
}
