"use client";

import Link from "next/link";
import React from "react";
import { useActiveSectionContext } from "../components/active-section-context";
export default function NotFound() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-semibold text-primary dark:text-primaryDark">
          404
        </h1>
        <p className="mb-4 text-lg text-dark dark:text-light">
          Oops! Looks like youre lost.
        </p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-primary dark:text-primaryDark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-4 text-dark dark:text-white">
          Let&apos;s get you back{" "}
          <Link
            href={"/"}
            onClick={() => {
              setActiveSection("Home");
              setTimeOfLastClick(Date.now());
            }}
            className="text-primary dark:text-primaryDark"
          >
            Home
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
