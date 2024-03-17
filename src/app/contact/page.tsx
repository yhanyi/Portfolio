"use client";

import React, { useEffect } from "react";
import ContactTerminal from "@/components/contact-terminal";

export default function Home() {
  // FIXME: Temporary fix to load pages at the top.
  useEffect(() => {
    const positionString = localStorage.getItem("positon")!;
    const position = parseInt(positionString, 10);
    setTimeout(() => window.scrollTo(0, position), 0);
  }, []);

  return (
    <main className="mt-28 sm:mt-36 flex flex-col px-4">
      <div className="flex flex-col items-center justify-center">
        <span className="rounded-xl text-center p-2 mb-10 font-bold text-2xl text-dark dark:text-light">
          Get In Touch!
        </span>
        <span>
          Send me a message through the contact terminal and I&apos;ll get back
          to you!
        </span>
        <div className="w-full">
          <ContactTerminal />
        </div>
      </div>
    </main>
  );
}
