"use client";

import React, { useEffect } from "react";
import ScrambledText from "@/components/scrambled-text";
import CoursesAbout from "@/components/about-courses";
import Certificates from "@/components/certificates";

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
        text="Courses"
        speed={80}
        className="mb-10"
        textOptions=""
      />
      <div className="flex-[0.75]">
        <CoursesAbout />
      </div>
      <Certificates />
    </main>
  );
}
