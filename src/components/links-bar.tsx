"use client";

import Link from "next/link";
import React from "react";
import { FiGithub, FiLinkedin, FiDownload, FiMail } from "react-icons/fi"

export default function LinksBar() {

    return (
        <div className="flex items-center justify-center">
            <div className="relative">
                <div
                className="z-10 p-2 gap-2 flex justify-center rounded-xl items-center duration-200 w-full h-full bg-opacity-80 backgroup-blur-[0.5rem] border border-black dark:border-white bg-white dark:bg-black text-gray-500 dark:text-gray-400"
                >
                    <Link href="https://github.com/yhanyi"
                    className="p-2 rounded-md hover:bg-primary dark:hover:bg-primaryDark hover:text-black transition-colors cursor-pointer">
                        <FiGithub />
                    </Link>
                    
                    <Link href="https://www.linkedin.com/in/yeoh-han-yi/"
                    className="p-2 rounded-md hover:bg-primary dark:hover:bg-primaryDark hover:text-black transition-colors cursor-pointer">
                        <FiLinkedin />
                    </Link>

                    <Link href="/resume.pdf"
                    download={true}
                    target={"_blank"}
                    className="p-2 rounded-md hover:bg-primary dark:hover:bg-primaryDark hover:text-black transition-colors cursor-pointer">
                        <FiDownload />
                    </Link>

                    <Link href="mailto:yeohhanyi0916@gmail.com"
                    target={"_blank"}
                    className="p-2 rounded-md hover:bg-primary dark:hover:bg-primaryDark hover:text-black transition-colors cursor-pointer">
                        <FiMail />
                    </Link>
                </div>
            </div>
        </div>
    )
}