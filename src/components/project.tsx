import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "@/components/projectmodal";
import React from "react";
import Image, { StaticImageData } from "next/image";
import SkillHover from "@/components/skill-hover";

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
  modalContent: JSX.Element;
  description: string;
  projectLink: string | null;
  imgSrc: StaticImageData;
  tags: { srclight: string; srcdark: string; title: string }[];
  title: string;
  code: string | null;
}

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tags,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden"
        >
          <Image
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            layout="fill"
            objectFit="cover"
            quality={95}
          />
        </div>
        <div className="mt-6">
          <Reveal width="w-full">
            <div className="flex items-center gap-2 w-full">
              <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">
                {title}
              </h4>
              <div className="w-full h-[1px] bg-zinc-600" />

              {code ? (
                <Link href={code} target="_blank" rel="nofollow">
                  <AiFillGithub className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" />
                </Link>
              ) : null}

              {projectLink ? (
                <Link href={projectLink} target="_blank" rel="nofollow">
                  <AiOutlineExport className="text-xl text-zinc-300 hover:text-indigo-300 transition-colors" />
                </Link>
              ) : null}
            </div>
          </Reveal>
          <Reveal>
            <ul className="flex flex-wrap gap-5 mb-3 md:mb-5 p-5">
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
          </Reveal>
          <Reveal>
            <p className="text-zinc-300 leading-relaxed">
              {description}{" "}
              <span
                className="inline-block text-sm text-indigo-300 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Learn more {">"}
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tags={tags}
      />
    </>
  );
};
