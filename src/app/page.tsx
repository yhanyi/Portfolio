"use client";

import { useActiveSectionContext } from "@/components/active-section-context";
import LinksBar from "@/components/links-bar";
import ScrambledText from "@/components/scrambled-text";
import ThreeGradient from "@/components/three-gradient";
import Link from "next/link";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import BubbleText from "@/components/bubble-text";

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
              className="!text-xl !sm:text-2xl font-thin"
              textOptions="bg-gradient-to-r from-primary to-primaryDark bg-clip-text text-transparent"
            />
            {/* <BubbleText
              text="Yeoh Han Yi"
              className="text-xl sm:text-2xl font-thin text-primary dark:text-primaryDark"
            /> */}
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
          <button
            className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[2px] 
        border-primary dark:border-primaryDark px-4 py-2 font-semibold
        uppercase text-primary dark:text-primaryDark transition-all duration-500
        bg-light dark:bg-dark
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-primary dark:before:bg-primaryDark
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
          >
            <FiLogIn />
            <span>Enter</span>
          </button>
        </div>
      </Link>
    </main>
  );
}
