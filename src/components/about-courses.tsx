"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CoursesAbout() {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <p className="my-2 text-xs md:text-base sm:text-sm px-2 sm:px-10">
        I like to try different courses for fun to learn more about the
        workflows of different fields in tech. It also keeps me interested in
        what I learn.
      </p>
      <p className="my-2 text-xs md:text-base sm:text-sm px-2 sm:px-10">
        Here are some of the certificates from courses I have done in my free
        time! Collecting them into place gives me a tangible visualization of
        what I have learnt thus far.
      </p>
      <p className="my-2 text-xs md:text-base sm:text-sm px-2 sm:px-10">
        Please note that these courses are mostly done for fun and are not
        necessarily representative of my professional abilities.
      </p>
    </motion.div>
  );
}
