"use client";

import { useActiveSectionContext } from "@/components/active-section-context";
import ScrambledText from "@/components/scrambled-text";
import ThreeGradient from "@/components/three-gradient";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    
    const handleLinkClick = () => {
        setActiveSection("About");
        setTimeOfLastClick(Date.now());
    };

    return (
        <main>
            <ThreeGradient />
            <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ScrambledText text="Yeoh Han Yi" speed={50} className="!text-2xl" />
                <ScrambledText text="NUS Computer Science" speed={25} className="!text-base" />
                <Link href="/about"
                onClick={handleLinkClick}>
                    <div className="rounded-2xl border-2 border-dashed border-black dark:border-white bg-light dark:bg-dark px-6 py-3 font-semibold text-dark dark:text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                        Enter!
                    </div>
                </Link>
            </div>
        </main>
    )
}