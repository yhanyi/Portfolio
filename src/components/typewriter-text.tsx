import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 2;
const STAGGER = 0.025;

export default function AnimatedText({ phrases, classNames }: any) {
  const countRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length);
    }, WAIT_TIME);

    return () => clearInterval(intervalRef);
  }, [phrases]);

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 ${classNames}`}
    >
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
}
