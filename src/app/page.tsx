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
          <a className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-primary dark:text-primaryDark transition duration-300 ease-out border-2 border-primary dark:border-primaryDark rounded-full shadow-md group bg-light dark:bg-dark">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-light dark:text-dark duration-300 -translate-x-full bg-primary dark:bg-primaryDark group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full font-mono text-primary dark:text-primaryDark transition-all duration-300 transform group-hover:translate-x-full ease">
              Enter
            </span>
            <span className="relative invisible">Enter</span>
          </a>
        </div>
      </Link>
    </main>
  );
}
