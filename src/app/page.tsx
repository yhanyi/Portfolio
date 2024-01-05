"use client";

import { useActiveSectionContext } from "@/components/active-section-context";
import LinksBar from "@/components/links-bar";
import ScrambledText from "@/components/scrambled-text";
import ThreeGradient from "@/components/three-gradient";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    
    const handleLinkClick = () => {
        setActiveSection("About");
        setTimeOfLastClick(Date.now());
    };

    return (
        <main>
            <ThreeGradient />
            <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4">
                
                <div className="group relative px-4 py-2 font-medium transition-colors duration-[400ms]">
                    <span><ScrambledText text="Yeoh Han Yi" speed={50} className="!text-xl !sm:text-2xl" /></span>
                    <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary dark:bg-primaryDark transition-all duration-100 group-hover:w-full" />
                    <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary dark:bg-primaryDark transition-all delay-100 duration-100 group-hover:h-full" />
                    <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary dark:bg-primaryDark transition-all delay-200 duration-100 group-hover:w-full" />
                    <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary dark:bg-primaryDark transition-all delay-300 duration-100 group-hover:h-full" />
                </div>

                <LinksBar />

                <Link href="/about"
                onClick={handleLinkClick}>
                    <div className="text-sm sm:text-base rounded-2xl border-2 border-dashed border-black dark:border-white px-3 py-3 text-dark hover:text-primary dark:text-white hover:dark:text-primaryDark transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                        <FiArrowRight />
                    </div>
                </Link>

            </div>
        </main>
    )
}