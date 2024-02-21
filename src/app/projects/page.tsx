"use client";

import React, { useEffect } from "react";
import Projects from "@/components/projects";
import ScrambledText from "@/components/scrambled-text";

export default function Home() {
  // FIXME: Temporary fix to load pages at the top.
  useEffect(() => {
    const positionString = localStorage.getItem("positon")!;
    const position = parseInt(positionString, 10);
    setTimeout(() => window.scrollTo(0, position), 0);
  }, []);

  return (
    <main className="mt-28 sm:mt-36 flex flex-col px-4">
      <div className="flex items-center justify-center">
        <span className="border border-dark dark:border-light rounded-xl text-center p-2 mb-10 font-bold text-2xl bg-gradient-to-r from-blueOne to-blueTwo bg-clip-text text-transparent">
          Projects
        </span>
      </div>
      <Projects />
    </main>
  );
}
