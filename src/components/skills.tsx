"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { skillsData } from '@/lib/skills-data';

type SkillItemProps = {
    srclight: string,
    srcdark: string,
    width: number,
    height: number,
    title: string,
    index: number,
}

const SkillItem = ({srclight, srcdark, width, height, title, index}: SkillItemProps) => {
    const {ref, inView} = useInView({
        triggerOnce: false
    })

    const imageVariants = {
        hidden: {opacity:0},
        visible: {opacity:1}
    }

    const animationDelay = 0.1;
    
    return (
        <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{delay: index*animationDelay}}
        className="flex items-center justify-center"
        >

            <div className="group flex justify-center p-8 rounded-md drop-shadow-xl hover:translate-y-5 transition-all duration-300">
                <Image 
                src={srclight}
                width={width}
                height={height}
                alt="Skill Image"
                className="flex dark:hidden items-center justify-center"
                />
                <Image 
                src={srcdark}
                width={width}
                height={height}
                alt="Skill Image"
                className="hidden dark:flex items-center justify-center"
                />
                <span
                className="p-2 bg-dark dark:bg-light rounded-xl font-semibold flex text-center absolute opacity-0 group-hover:opacity-100 text-light dark:text-dark group-hover:-translate-y-12 duration-300"
                >
                {title}
                </span>
            </div>
            
        </motion.div>
    )
}

export default function Skills() {
    const [dimension, setDimension] = useState(50);
    const updateDimension = () => {
        if (typeof window !== "undefined") {
            setDimension(window.innerWidth >= 639 ? 50 : 30);
        };
    };
    useEffect(() => {
        updateDimension();
        const handleResize = () => {
            updateDimension();
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.addEventListener("resize", handleResize);
        };
    }, [dimension]);


    return (
        <>
            <div
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
            style={{transform:"scale(0.9)"}}>
                <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
                    {skillsData.map((item, index) => (
                        <SkillItem
                        key={index}
                        srclight={item.imagelight}
                        srcdark={item.imagedark}
                        title={item.title}
                        width={dimension}
                        height={dimension}
                        index={index}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}