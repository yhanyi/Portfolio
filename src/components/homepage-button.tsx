import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";

export default function MagnetButton() {
  const ref = useRef(null);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e: any) => {
    if (!ref.current) return;

    const { height, width, left, top } = ref.current.getBoundingClientRect();

    setX(e.clientX - (left + width / 2));
    setY(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    setX(0);
    setY(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative grid h-[50px] w-[50px] place-content-center rounded-full border border-dark dark:border-light transition-colors duration-700 ease-out"
    >
      <MdOutlineArrowUpward className="relative z-10 rotate-45 text-3xl text-dark dark:text-light transition-all duration-700 ease-out group-hover:rotate-90" />

      <div className="absolute inset-0 z-0 scale-0 rounded-full bg-primary dark:bg-primaryDark transition-transform duration-700 ease-out group-hover:scale-100" />

      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        width="200"
        height="200"
        className="absolute z-10"
      >
        <path
          id="circlePath"
          d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
          fill="none"
        />
        {/* <text>
          <textPath
            href="#circlePath"
            fill="black"
            className="fill-black text-xl font-light uppercase opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
          >
            Welcome to my website!
          </textPath>
        </text> */}
      </motion.svg>
    </motion.button>
  );
}
