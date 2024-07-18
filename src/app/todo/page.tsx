"use client";

import { motion } from "framer-motion";
import React from "react";
import MarkdownEditor from "@/components/markdown";

export default function Home() {
  return (
    <main className="flex flex-col px-4 max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <span className="rounded-xl text-center p-2 font-bold text-2xl text-dark dark:text-light">
          To-Do List
        </span>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
        >
          A simple markdown to-do list since I&apos;m too lazy to download apps
          on my devices lol.
        </motion.div>
      </div>
      <div className="items-center justify-center mt-10">
        <MarkdownEditor />
      </div>
    </main>
  );
}
