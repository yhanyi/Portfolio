"use client";

import React, { useEffect, useState } from "react";
import SkillsGlobe from "@/components/skills-globe";

export default function Skills() {
  const [dimension, setDimension] = useState(50);
  const updateDimension = () => {
    if (typeof window !== "undefined") {
      setDimension(window.innerWidth >= 639 ? 50 : 30);
    }
  };
  useEffect(() => {
    updateDimension();
    const handleResize = () => {
      updateDimension();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [dimension]);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center gap-3 h-full max-w-xl relative"
        style={{ transform: "scale(0.9)" }}
      >
        <div>
          <SkillsGlobe />
        </div>
      </div>
    </>
  );
}
