"use client";

import React from "react";
import { useRef } from "react";
import { projectsData } from "@/lib/projects-data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FiPlayCircle, FiGithub } from "react-icons/fi";

type PopupProps = {
    link: string,
    Icon: any,
    text: string
}

const Popup = ({link, Icon, text}: PopupProps) => {
    return (
        <React.Fragment>
            <Link
            href={link}
            target={"_blank"}
            className="flex items-center justify-center group relative">
                <Icon className="w-5 h-5 hover:scale-110 hover:text-primary dark:hover:text-primaryDark transition-300" />
                <span className="absolute -top-10 left-[50%] -translate-x-[50%] 
                    z-20 origin-left scale-0 p-1 rounded-lg border border-gray-500 
                    bg-white dark:bg-black text-black dark:text-white text-sm
                    shadow-md transition-all duration-300 ease-in-out 
                    group-hover:scale-100">{text}</span>
            </Link>
        </React.Fragment>
    )
}

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    demoLink,
    githubLink
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
        ref={ref}
        style={{
            scale: scaleProgress,
            opacity: opacityProgress,
        }}
        className="mb-3 sm:mb-8 last:mb-0"
        >
        <section
        className="max-w-[60rem] bg-gray-100 border border-black/5 rounded-xl relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">

            <div className="flex flex-col md:flex-row gap-3">
                <Image
                src={imageUrl}
                alt="Project Image"
                quality={95}
                className="md:max-w-[50%] overflow-hidden rounded-xl"
                />

                <div className="flex flex-col p-2">
                    <div className="flex justify-between">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <div className="flex gap-5">
                            <Popup link={demoLink} text="Demo" Icon={FiPlayCircle} />
                            <Popup link={githubLink} text="Github" Icon={FiGithub} />
                        </div>
                    </div>
                    
                    <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
                        {description}
                    </p>
                    <ul className="flex flex-wrap mt-2 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                        <li
                            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                            key={index}
                        >
                            {tag}
                        </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
        </motion.div>
    );
}