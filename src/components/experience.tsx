import React, { useRef, useEffect, useState } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import SkillHover from "./skill-hover";
import { experiencesData } from "@/lib/experiences-data";

interface RevealProps {
  children: JSX.Element | JSX.Element[];
  width?: string;
}

const Reveal = ({ children, width = "w-fit" }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${width}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-blueTwo dark:bg-blueOne"
      />
    </div>
  );
};

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string[];
  tags?: any;
}

const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tags,
}: Props) => {
  const [dimension, setDimension] = useState(50);
  const updateDimension = () => {
    if (typeof window !== "undefined") {
      setDimension(window.innerWidth >= 768 ? 30 : 20);
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
    <div className="px-10">
      <div className="flex items-center justify-between mb-2">
        <Reveal>
          <span className="font-bold text-xl">{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className="flex items-center justify-between mb-4">
        <Reveal>
          <span className="text-blueTwo dark:text-blueOne font-bold">
            {position}
          </span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>

      {description.map((item) => (
        <Reveal key={item}>
          <p key={item} className="mb-6 leading-relaxed text-sm md:text-base">
            {item}
          </p>
        </Reveal>
      ))}

      {tags ? (
        <Reveal width="w-full">
          <ul className="flex flex-wrap gap-5 mb-10 p-5 justify-between">
            {tags.map((tag: any, id: number) => (
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
        </Reveal>
      ) : null}
    </div>
  );
};

export default function Experience() {
  return (
    <section className="section-wrapper">
      {experiencesData.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
}
