"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/projects-data";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FiMaximize, FiPlayCircle, FiGithub } from "react-icons/fi";
import WebsitePreview from "@/components/website-preview";
import SkillHover from "./skill-hover";

type PopupProps = {
  link: string;
  Icon: any;
  text: string;
};

const Popup = ({ link, Icon, text }: PopupProps) => {
  return (
    <React.Fragment>
      <Link
        href={link}
        target={"_blank"}
        className="flex items-center justify-center group relative"
      >
        <Icon className="w-5 h-5 hover:scale-110 hover:text-primary dark:hover:text-primaryDark transition-300" />
        <span
          className="absolute -top-10 left-[50%] -translate-x-[50%] 
                    z-20 origin-left scale-0 p-1 rounded-lg border border-gray-500 
                    bg-white dark:bg-black text-black dark:text-white text-sm
                    shadow-md transition-all duration-300 ease-in-out 
                    group-hover:scale-100"
        >
          {text}
        </span>
      </Link>
    </React.Fragment>
  );
};

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  date,
  imageUrl,
  demoLink,
  githubLink,
  tags,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const [dimension, setDimension] = useState(50);
  const updateDimension = () => {
    if (typeof window !== "undefined") {
      setDimension(window.innerWidth >= 768 ? 25 : 20);
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
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0"
    >
      <section className="max-w-[60rem] bg-gray-100 border border-black/5 rounded-xl relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
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
                {demoLink ? (
                  <WebsitePreview
                    link={demoLink}
                    text="Preview"
                    Icon={FiMaximize}
                  />
                ) : null}
                {demoLink ? (
                  <Popup link={demoLink} text="Demo" Icon={FiPlayCircle} />
                ) : null}
                {githubLink ? (
                  <Popup link={githubLink} text="Github" Icon={FiGithub} />
                ) : null}
              </div>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>

            <p className="my-2 sm:my-5 text-xs leading-relaxed text-gray-700 dark:text-white/70">
              {date}
            </p>

            <ul className="flex flex-wrap gap-5 my-2 sm:my-5 ">
              {tags.map((tag, id) => (
                <li key={id}>
                  <SkillHover
                    srclight={tag.srclight}
                    srcdark={tag.srcdark}
                    width={dimension}
                    height={dimension}
                    title={tag.title}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
