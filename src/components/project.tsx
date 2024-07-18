import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "@/components/projectmodal";
import React from "react";
import Image, { StaticImageData } from "next/image";
import SkillHover from "@/components/skill-hover";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string | null;
  imgSrc: StaticImageData;
  tags: any[];
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
          <div className="flex items-center gap-2 w-full">
            <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">
              {title}
            </h4>
            <div className="w-full h-[1px] bg-zinc-600" />

            {code ? (
              <Link href={code} target="_blank" rel="nofollow">
                <AiFillGithub className="text-xl text-gray-500 hover:text-blueTwo dark:hover:text-blueOne transition-colors" />
              </Link>
            ) : null}

            {projectLink ? (
              <Link href={projectLink} target="_blank" rel="nofollow">
                <AiOutlineExport className="text-xl text-gray-500 hover:text-blueTwo dark:hover:text-blueOne transition-colors" />
              </Link>
            ) : null}
          </div>

          <ul className="flex flex-wrap gap-5 my-3 md:my-5">
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

          <p className="text-dark dark:text-light leading-relaxed">
            {description}{" "}
            <span
              className="inline-block text-sm text-blueTwo dark:text-blueOne cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Learn More {">"}
            </span>
          </p>
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
