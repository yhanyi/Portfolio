"use client";

import LinksBar from "@/components/links-bar";
import ScrambledText from "@/components/scrambled-text";
import ThreeGradient from "@/components/three-gradient";
import React from "react";
import MagnetButton from "@/components/homepage-button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <ThreeGradient />
      <motion.div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4">
        <div className="group relative px-4 py-2 font-medium transition-colors duration-[400ms]">
          <span>
            <ScrambledText
              text="Yeoh Han Yi"
              speed={50}
              className="text-xl sm:text-2xl"
              textOptions="bg-gradient-to-r from-blueOne to-blueTwo bg-clip-text text-transparent"
            />
          </span>
        </div>

        <LinksBar />
      </motion.div>

      <motion.div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <MagnetButton />
      </motion.div>
    </main>
  );
}
