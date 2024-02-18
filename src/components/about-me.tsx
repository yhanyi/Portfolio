"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <p className="my-4 text-xs md:text-base sm:text-sm">
        👋 Hi, I&apos;m Yeoh Han Yi, a Computer Science major with a second
        major in Statistics at the National University of Singapore, currently
        navigating the second semester of my freshman year.
      </p>
      <p className="my-4 text-xs md:text-base sm:text-sm">
        Undecided on a specialization as of now, I&apos;m currently exploring
        various fields, with a strong inclination towards machine learning and
        quant dev. Full-stack development and software engineering are in my
        focus as well. This eclectic approach allows me to discover where my
        interests and strengths lie.
      </p>
      <p className="my-4 text-xs md:text-base sm:text-sm">
        Fueled by a fascination with bleeding-edge technology since I was young,
        I see my studies in computer science as a front-row seat to witness the
        next wave of groundbreaking innovations.
      </p>
      <p className="my-4 text-xs md:text-base sm:text-sm">
        I started my coding journey much later than many of my peers, but my
        strong willingness to learn and improve my skills allows me to remain
        competitive.
      </p>
    </motion.div>
  );
}
