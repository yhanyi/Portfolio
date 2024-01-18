"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  FiGithub,
  FiLinkedin,
  FiChevronDown,
  FiDownload,
} from "react-icons/fi";

type OptionProps = {
  text: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  Icon: any;
  link: string;
};

type DownloadableProps = {
  text: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  Icon: any;
  link: string;
};

const Option = ({ text, setOpen, Icon, link }: OptionProps) => {
  return (
    <React.Fragment>
      <Link href={link}>
        <motion.li
          variants={itemVariants}
          onClick={() => setOpen(false)}
          className="text-black dark:text-white flex items-center gap-2 w-full p-2 text-sm font-medium rounded-md hover:bg-primaryDark hover:text-black transition-colors cursor-pointer"
        >
          <motion.span variants={actionIconVariants}>
            <Icon />
          </motion.span>
          <span>{text}</span>
        </motion.li>
      </Link>
    </React.Fragment>
  );
};

const Downloadable = ({ text, setOpen, Icon, link }: DownloadableProps) => {
  return (
    <React.Fragment>
      <Link href={link} target={"_blank"} download={true}>
        <motion.li
          variants={itemVariants}
          onClick={() => setOpen(false)}
          className="text-black dark:text-white flex items-center gap-2 w-full p-2 text-sm font-medium rounded-md hover:bg-primaryDark hover:text-black transition-colors cursor-pointer"
        >
          <motion.span variants={actionIconVariants}>
            <Icon />
          </motion.span>
          <span>{text}</span>
        </motion.li>
      </Link>
    </React.Fragment>
  );
};

export default function NameDropdown() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handler = (e: { target: any }) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef]);

  return (
    <div className="flex items-center justify-center" ref={menuRef}>
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          className="z-10 gap-2 p-1 flex justify-center rounded-xl items-center duration-200 w-[8rem] h-[3rem] bg-opacity-80 backgroup-blur-[0.5rem] border-opacity-40 shadow bg-white text-black dark:bg-black dark:text-white hover:scale-105 active:scale-100"
          onClick={() => setOpen((pv) => !pv)}
        >
          <span className="font-medium text-sm">Yeoh Han Yi</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white dark:bg-black shadow-xl absolute top-[120%] left-[50%] overflow-hidden"
        >
          <Option
            setOpen={setOpen}
            text="Github"
            Icon={FiGithub}
            link="https://github.com/yhanyi"
          />
          <Option
            setOpen={setOpen}
            text="LinkedIn"
            Icon={FiLinkedin}
            link="https://www.linkedin.com/in/yeoh-han-yi/"
          />
          <Downloadable
            setOpen={setOpen}
            text="Resume"
            Icon={FiDownload}
            link="/resume.pdf"
          />
        </motion.ul>
      </motion.div>
    </div>
  );
}

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
