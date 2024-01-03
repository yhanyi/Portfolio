"use client";

import About from '@/components/about-me'
import EarthCanvas from '@/components/earth';
import Experiences from '@/components/experiences'
import ScrambledText from '@/components/scrambled-text';
import Skills from '@/components/skills'
import React, { useEffect } from 'react'

export default function Home() {

    // FIXME: Temporary fix to load pages at the top.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <main className="mt-28 sm:mt-36 flex flex-col px-4">
            <ScrambledText text="About Me" speed={100} className="" />
            <div className="flex xl:flex-row flex-col overflow-hidden gap-10 justify-center">
                <div className="xl:w-1/3 md:h-[550px] h-[350px]">
                    <EarthCanvas /> 
                </div>
                <div className="flex-[0.75]">
                    <About />
                </div>
            </div>
            <ScrambledText text="Tools & Technologies" speed={25} className="" />
            <Skills />
            <ScrambledText text="Education & Experiences" speed={25} className="" />
            <Experiences />
        </main>
    )
}
