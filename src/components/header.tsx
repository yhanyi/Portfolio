"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/links-data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "./active-section-context";
import ThemeSwitch from "./theme-switch";
import MenuDropdown from "./menu-dropdown";
import NameDropdown from "./name-dropdown";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header
      className={clsx(
        { "top-[-10rem]": activeSection === "Home" },
        "duration-500 z-[10] py-2 fixed top-0 flex justify-between md:justify-center w-full px-2 md:px-10 bg-light dark:bg-dark bg-opacity-80 dark:bg-opacity-80 gap-10"
      )}
    >
      <NameDropdown />
      <nav className="hidden md:flex justify-center items-center py-0 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] h-[3.25rem] sm:w-[28rem] w-[20rem] rounded-full dark:bg-black dark:border-black/40 dark:bg-opacity/75">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 dark:text-gray-400 sm:w-[initial] gap-5">
          {links.map((link) => (
            <li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-black transition dark:hover:text-white",
                  { "text-black dark:text-white": activeSection === link.name }
                )}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-center items-center gap-2">
        <ThemeSwitch />
        <MenuDropdown />
      </div>
    </header>
  );
}
