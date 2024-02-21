"use client";

import About from "@/components/about-me";
import EarthCanvas from "@/components/earth";
import Experiences from "@/components/experiences";
import ScrambledText from "@/components/scrambled-text";
import Skills from "@/components/skills";
import React, { useEffect } from "react";

export default function Home() {
  // FIXME: Temporary fix to load pages at the top.
  useEffect(() => {
    const positionString = localStorage.getItem("positon")!;
    const position = parseInt(positionString, 10);
    setTimeout(() => window.scrollTo(0, position), 0);
  }, []);

  return (
    <main className="mt-28 sm:mt-36 flex flex-col px-4 md:px-16">
      <div className="flex items-center justify-center">
        <span className="border border-dark dark:border-light rounded-xl text-center p-2 font-bold text-2xl bg-gradient-to-r from-blueOne to-blueTwo bg-clip-text text-transparent">
          About Me
        </span>
      </div>

      <div className="flex xl:flex-row flex-col overflow-hidden gap-10 justify-center items-center">
        <div className="xl:w-1/3 md:w-[550px] md:h-[550px] w-[350px] h-[350px]">
          <EarthCanvas />
        </div>
        <div className="flex-[0.75]">
          <About />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="border border-dark dark:border-light rounded-xl text-center p-2 my-20 font-bold text-2xl bg-gradient-to-r from-blueOne to-blueTwo bg-clip-text text-transparent">
          Tools & Technologies
        </span>
      </div>
      <div className="flex items-center justify-center">
        <Skills />
      </div>

      <div className="flex items-center justify-center">
        <span className="border border-dark dark:border-light rounded-xl text-center p-2 my-20 font-bold text-2xl bg-gradient-to-r from-blueOne to-blueTwo bg-clip-text text-transparent">
          Education & Experiences
        </span>
      </div>
      <Experiences />
    </main>
  );
}
