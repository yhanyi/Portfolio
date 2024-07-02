import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import SkillHover from "./skill-hover";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: StaticImageData;
  code: string | null;
  projectLink: string | null;
  tags: any[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tags,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

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

  const content = (
    <div
      className="fixed inset-0 z-50 px-4 py-12 bg-zinc-950/50 backdrop-blur overflow-y-scroll flex justify-center cursor-pointer"
      onClick={() => setIsOpen(false)}
    >
      <button className="absolute top-4 md:top-6 text-xl right-4">
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-light dark:bg-dark shadow-lg cursor-auto"
      >
        <Image src={imgSrc} alt={`An image of the ${title} project.`} />
        <div className="p-8">
          <h4 className="text-3xl font-bold mb-2">{title}</h4>
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

          <div className="space-y-4 my-6 leading-relaxed text-sm text-dark dark:text-light">
            {modalContent}
          </div>

          <div>
            {code || projectLink ? (
              <p className="font-bold mb-2 text-xl">
                Project Links
                <span className="text-blueTwo dark:text-blueOne">.</span>
              </p>
            ) : null}
            <div className="flex items-center gap-4 text-sm">
              {code ? (
                <Link
                  target="_blank"
                  rel="nofollow"
                  className="text-gray-500 hover:text-blueTwo dark:hover:text-blueOne transition-colors flex items-center gap-1"
                  href={code}
                >
                  <AiFillGithub /> Source Code
                </Link>
              ) : null}
              {projectLink ? (
                <Link
                  target="_blank"
                  rel="nofollow"
                  className="text-gray-500 hover:text-blueTwo dark:hover:text-blueOne transition-colors flex items-center gap-1"
                  href={projectLink}
                >
                  <AiOutlineExport /> Live Project
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  return ReactDOM.createPortal(content, document.getElementById("root")!);
};
