"use client";

import { motion } from "framer-motion";
import React, { useRef, useState, RefObject } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";
import { useActiveSectionContext } from "@/components/active-section-context";
import Link from "next/link";

export default function MagnetButton() {
  const ref = useRef(null);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e: any) => {
    if (!ref.current) return;
    const { height, width, left, top } = (
      ref.current as any
    ).getBoundingClientRect();

    setX(e.clientX - (left + width / 2));
    setY(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    setX(0);
    setY(0);
  };

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const handleLinkClick = () => {
    setActiveSection("About");
    setTimeOfLastClick(Date.now());
  };

  return (
    <Link href="/about" onClick={handleLinkClick}>
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="group relative grid h-[50px] w-[50px] place-content-center rounded-full border border-dark dark:border-light transition-colors duration-700 ease-out bg-opacity-50 bg-light dark:bg-dark"
      >
        <Link href="/about" onClick={handleLinkClick}></Link>
        <MdOutlineArrowUpward className="relative z-10 rotate-45 text-3xl text-dark dark:text-light transition-all duration-700 ease-out group-hover:rotate-90" />

        <div className="absolute inset-0 z-0 scale-0 rounded-full bg-primary dark:bg-primaryDark transition-transform duration-700 ease-out group-hover:scale-100" />
      </motion.button>
    </Link>
  );
}
