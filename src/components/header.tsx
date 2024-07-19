"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/links-data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/components/active-section-context";
import TypewriterText from "./typewriter-text";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header
      className={clsx(
        { hidden: activeSection === "Home" },
        "z-[10] w-full bg-light dark:bg-dark bg-opacity-80 dark:bg-opacity-80 backdrop-blur-[0.5rem] flex flex-col items-center my-10 gap-5"
      )}
    >
      <div className="flex flex-col md:flex-row items-center justify-center py-4 md:py-8 px-2 md:px-10 border rounded-xl">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <img
            src="/pfp.jpg"
            alt="Profile Picture"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full"
          />
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h1 className="text-2xl md:text-4xl font-bold">Yeoh Han Yi</h1>
            <div>
              <TypewriterText
                phrases={[
                  "Machine Learning",
                  "Quantitative Development",
                  "Artificial Intelligence",
                  "Algorithm Theory",
                  "Software Engineering",
                ]}
                classNames="text-base text-center md:text-left"
              />
            </div>
            <div className="flex gap-2">CS & Maths @ NUS</div>
            <div className="flex gap-2">
              <Link
                href="mailto:yeohhanyi0916@gmail.com"
                target={"_blank"}
                className="text-blue-500 hover:underline"
              >
                Email
              </Link>
              <Link
                href="/yeohhanyi_resume.pdf"
                download={true}
                target={"_blank"}
                className="text-blue-500 hover:underline"
              >
                Resume
              </Link>
              <Link
                href="https://github.com/yhanyi"
                className="text-blue-500 hover:underline"
              >
                Github
              </Link>
              <Link
                href="https://www.linkedin.com/in/yeoh-han-yi/"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="w-fit rounded-full border border-1 p-2">
        <ul className="flex items-center justify-center gap-1 sm:gap-5 py-2 text-sm md:text-base font-medium">
          {links.map((link) => (
            <li key={link.hash} className="relative">
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx("px-3 py-2 hover:underline transition", {
                  "text-black dark:text-white": activeSection === link.name,
                })}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-600"
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
