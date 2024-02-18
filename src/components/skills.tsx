"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { skillsData } from "@/lib/skills-data";

type SkillItemProps = {
  srclight: string;
  srcdark: string;
  width: number;
  height: number;
  level: string;
  title: string;
  index: number;
  id: number;
};

const SkillItem = ({
  srclight,
  srcdark,
  width,
  height,
  level,
  title,
  index,
  id,
}: SkillItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex items-center justify-center"
    >
      <div
        className="relative group"
        key={title}
        onMouseEnter={() => setHoveredIndex(id)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence mode="wait">
          {hoveredIndex === id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-dark dark:bg-light z-50 shadow-xl px-4 py-2"
            >
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
              <div className="font-bold text-light dark:text-dark relative z-30 text-sm md:text-base">
                {title}
              </div>
              <div className="text-light dark:text-dark text-xs">{level}</div>
            </motion.div>
          )}
        </AnimatePresence>
        <Image
          onMouseMove={handleMouseMove}
          src={srclight}
          width={width}
          height={height}
          alt="Skill Image"
          className="flex dark:hidden items-center justify-center hover:scale-110 duration-300"
        />
        <Image
          onMouseMove={handleMouseMove}
          src={srcdark}
          width={width}
          height={height}
          alt="Skill Image"
          className="hidden dark:flex items-center justify-center hover:scale-110 duration-300"
        />
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [dimension, setDimension] = useState(50);
  const updateDimension = () => {
    if (typeof window !== "undefined") {
      setDimension(window.innerWidth >= 639 ? 50 : 30);
    }
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
        className="flex flex-col items-center justify-center gap-3 h-full relative"
        style={{ transform: "scale(0.9)" }}
      >
        <div className="flex flex-row justify-around flex-wrap gap-20 items-center">
          {skillsData.map((item, index) => (
            <SkillItem
              key={item.id}
              srclight={item.imagelight}
              srcdark={item.imagedark}
              level={item.level}
              title={item.name}
              width={dimension}
              height={dimension}
              index={item.id}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
