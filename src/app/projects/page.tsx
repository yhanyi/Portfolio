"use client";

import React from "react";
import { Project } from "@/components/project";
import { projects } from "@/lib/project-data";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col px-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-center">
        <span className="rounded-xl text-center p-2 font-bold text-2xl text-dark dark:text-light">
          Projects
        </span>
      </div>
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        I try my hand at projects sometimes too!
      </motion.div>
      <div className="mt-10 grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </main>
  );
}
