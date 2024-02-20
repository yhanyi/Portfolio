"use client";

import Link from "next/link";
import React from "react";
import { useActiveSectionContext } from "../components/active-section-context";
export default function NotFound() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <main>
      <div>Not found. Go back home?</div>
      <div>
        <Link
          href={"/"}
          onClick={() => {
            setActiveSection("Home");
            setTimeOfLastClick(Date.now());
          }}
        >
          Home
        </Link>
      </div>
    </main>
  );
}
