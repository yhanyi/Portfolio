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
      <div className="flex items-center justify-center">
        <span className="rounded-xl text-center p-2 font-bold text-2xl text-dark dark:text-light">
          About Me
        </span>
      </div>
      <div className="">
        <p className="my-4 text-xs md:text-base sm:text-sm">
          I&apos;m currently exploring various fields, heavily inclining towards
          machine learning and quantitative development/high-frequency trading.
        </p>
        <p className="my-4 text-xs md:text-base sm:text-sm">
          I&apos;ve always been fascinated by cutting-edge technology, and my
          studies in computer science allows me to participate in innovating the
          next groundbreaking technology.
        </p>
        <p className="my-4 text-xs md:text-base sm:text-sm">
          I started my coding journey later than many of my peers, but my strong
          willingness to learn and improve allows me to remain competitive.
        </p>
        <p className="my-4 text-xs text-gray-500">
          (Website last updated on 10 July 2024.)
        </p>
      </div>
    </motion.div>
  );
}
