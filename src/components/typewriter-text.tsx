import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function TypewriterText() {
  return (
    <div className="px-4 py-24 text-center md:py-36">
      <h3 className="text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl my-20 gap-5 flex items-center justify-center">
        Hello, I&apos;m Han Yi!
      </h3>
      <h3 className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl my-20">
        CS & Maths @ NUS
      </h3>
      <h3 className="text-xl font-medium  sm:text-2xl md:text-3xl lg:text-4xl">
        I&apos;m interested in
        <AnimatedText
          phrases={[
            "Machine Learning",
            "Quantitative Development",
            "Artificial Intelligence",
            "Algorithm Theory",
            "Software Engineering",
          ]}
        />
      </h3>
    </div>
  );
}

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 2;
const STAGGER = 0.025;

const AnimatedText = ({ phrases }: any) => {
  const countRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length);
    }, WAIT_TIME);

    return () => clearInterval(intervalRef);
  }, [phrases]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-4">
      <AnimatePresence mode="popLayout">
        {phrases[active].split(" ").map((word: string, wordIndex: number) => {
          if (wordIndex === 0) {
            countRef.current = 0;
          }

          return (
            <motion.div
              key={word}
              className="whitespace-nowrap text-dark dark:text-light"
            >
              {word.split("").map((letter, letterIndex) => {
                const content = (
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{
                      delay: countRef.current * STAGGER,
                      type: "spring",
                      damping: 12,
                      stiffness: 200,
                    }}
                    className="inline-block"
                    key={letterIndex}
                  >
                    {letter}
                  </motion.span>
                );

                countRef.current++;
                return content;
              })}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
