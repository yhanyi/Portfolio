"use client";

import React, { useEffect } from "react";
import Projects from "@/components/projects";
import ScrambledText from "@/components/scrambled-text";

export default function Home() {
  // FIXME: Temporary fix to load pages at the top.
  useEffect(() => {
    const positionString = localStorage.getItem("positon")!;
    const position = parseInt(positionString, 10);
    setTimeout(() => window.scrollTo(0, position), 100);
  }, []);

  return (
    <main className="mt-28 sm:mt-36 flex flex-col px-4">
      <ScrambledText
        text="Projects"
        speed={80}
        className="mb-10"
        textOptions=""
      />
      <Projects />
    </main>
  );
}
