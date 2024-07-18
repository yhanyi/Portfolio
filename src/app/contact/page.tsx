"use client";

import { motion } from "framer-motion";
import React from "react";
import ContactTerminal from "@/components/contact-terminal";

export default function Home() {
  return (
    <main className="flex flex-col px-4 max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <span className="rounded-xl text-center p-2 font-bold text-2xl text-dark dark:text-light">
          Get In Touch!
        </span>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
        >
          Send me a message through the contact terminal and I&apos;ll get back
          to you!
        </motion.div>
        <div className="w-full">
          <ContactTerminal />
        </div>
      </div>
    </main>
  );
}
