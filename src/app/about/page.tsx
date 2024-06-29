"use client";

import About from "@/components/about-me";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import React, { useEffect } from "react";
import TypewriterText from "@/components/typewriter-text";
import ParticlePreview from "@/components/particle-preview";

export default function Home() {
  // FIXME: Temporary fix to load pages at the top.
  useEffect(() => {
    const positionString = localStorage.getItem("positon")!;
    const position = parseInt(positionString, 10);
    setTimeout(() => window.scrollTo(0, position), 0);
  }, []);

  return (
    <main className="mt-16 sm:mt-16 flex flex-col px-4 md:px-16">
      <TypewriterText />
      <div className="flex xl:flex-row flex-col overflow-hidden gap-10 justify-center items-center mt-20">
        <div className="md:w-[550px] md:h-[550px] w-[350px] h-[350px]">
          <ParticlePreview />
        </div>
        <div className="flex-[0.75]">
          <About />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="rounded-xl text-center p-2 my-10 font-bold text-2xl text-dark dark:text-light">
          Tools & Technologies
        </span>
      </div>
      <div className="flex items-center justify-center">
        <Skills />
      </div>

      <div className="flex items-center justify-center">
        <span className="rounded-xl text-center p-2 my-20 font-bold text-2xl text-dark dark:text-light">
          Education & Experiences
        </span>
      </div>
      <Experience />
    </main>
  );
}
