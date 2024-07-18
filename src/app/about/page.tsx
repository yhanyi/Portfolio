"use client";

import { motion } from "framer-motion";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import React from "react";
import ParticlePreview from "@/components/particle-preview";

export default function Home() {
  return (
    <main className="flex flex-col px-4 max-w-4xl mx-auto">
      <div className="flex flex-col overflow-hidden gap-10 justify-center items-center">
        <div className="flex-[0.75]">
          <div className="flex items-center justify-center">
            <span className="rounded-xl text-center p-2 font-bold text-2xl text-dark dark:text-light">
              About Me
            </span>
          </div>
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
          >
            <p className="my-4 text-base">
              I have a strong passion for quantitative and
              technically-challenging fields, particularly in machine learning,
              quantitative development, and high frequency trading. I am
              constantly eager to expand my knowledge and push my technical
              skills to new heights!
            </p>
            <p className="my-4 text-base">On the side, I like doing pullups.</p>
          </motion.div>
        </div>
        <div className="md:w-[550px] md:h-[550px] w-[350px] h-[350px]">
          <ParticlePreview />
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
      <div className="flex items-center justify-center">
        <Experience />
      </div>
    </main>
  );
}
