"use client";

import React from "react";
import Certificates from "@/components/certificates";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col px-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-center">
        <span className="rounded-xl text-center p-2 font-bold text-2xl text-dark dark:text-light">
          Certificates
        </span>
      </div>
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <p className="my-2 text-base">
          I like learning and exploring more about different fields in the realm
          of technology! Doing courses in my spare time adds a bit of fun to my
          regular university coursework, and provides valuable insights into the
          unique workflows of different tech domains.
        </p>
        <p className="my-2 text-base">
          I have yet to obtain professional certificates such as the AWS
          Certifications. So for now, this page is basically a display shelf of
          some of the certificates from courses I have done in my free time.
          Collating them gives me a tangible visual of what I have learnt thus
          far, and reminds me to always continue the learning process.
        </p>
        <p className="my-2 text-base">
          Please note that these courses are pursued primarily for personal
          enrichment. While they showcase my commitment to continuous learning,
          they may not comprehensively reflect my professional abilities in
          these fields.
        </p>
      </motion.div>
      <Certificates />
    </main>
  );
}
