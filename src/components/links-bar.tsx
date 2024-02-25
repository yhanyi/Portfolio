"use client";

import Link from "next/link";
import React from "react";
import { FiGithub, FiLinkedin, FiDownload, FiMail } from "react-icons/fi";

export default function LinksBar() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="z-10 p-2 gap-2 flex justify-center rounded-xl items-center duration-200 w-full h-full bg-opacity-80 backgroup-blur-[0.5rem] border border-black dark:border-white bg-white dark:bg-black text-gray-500 dark:text-gray-400">
          <Link
            href="https://github.com/yhanyi"
            className="group relative p-2 rounded-md hover:bg-primary dark:hover:bg-primaryDark hover:text-black transition-colors cursor-pointer"
          >
            <FiGithub />
            <span
              className="absolute top-11 left-1/2 -translate-x-1/2
                    z-20 origin-left scale-0 p-1 rounded-lg border border-gray-500 
                    bg-white dark:bg-black text-black dark:text-white text-sm
                    shadow-md transition-all duration-300 ease-in-out 
                    group-hover:scale-100"
            >
              Github
            </span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/yeoh-han-yi/"
            className="group relative p-2 rounded-md hover:bg-primary dark:hover:bg-primaryDark hover:text-black transition-colors cursor-pointer"
          >
            <FiLinkedin />
            <span
              className="absolute top-11 left-1/2 -translate-x-1/2
                    z-20 origin-left scale-0 p-1 rounded-lg border border-gray-500 
                    bg-white dark:bg-black text-black dark:text-white text-sm
                    shadow-md transition-all duration-300 ease-in-out 
                    group-hover:scale-100"
            >
              LinkedIn
            </span>
          </Link>

          <Link
            href="/yeohhanyi_resume.pdf"
            download={true}
            target={"_blank"}
            className="group relative p-2 rounded-md hover:bg-primary dark:hover:bg-primaryDark hover:text-black transition-colors cursor-pointer"
          >
            <FiDownload />
            <span
              className="absolute top-11 left-1/2 -translate-x-1/2
                    z-20 origin-left scale-0 p-1 rounded-lg border border-gray-500 
                    bg-white dark:bg-black text-black dark:text-white text-sm
                    shadow-md transition-all duration-300 ease-in-out 
                    group-hover:scale-100"
            >
              Resume
            </span>
          </Link>

          <Link
            href="mailto:yeohhanyi0916@gmail.com"
            target={"_blank"}
            className="group relative p-2 rounded-md hover:bg-primary dark:hover:bg-primaryDark hover:text-black transition-colors cursor-pointer"
          >
            <FiMail />
            <span
              className="absolute top-11 left-1/2 -translate-x-1/2
                    z-20 origin-left scale-0 p-1 rounded-lg border border-gray-500 
                    bg-white dark:bg-black text-black dark:text-white text-sm
                    shadow-md transition-all duration-300 ease-in-out 
                    group-hover:scale-100"
            >
              Email
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
