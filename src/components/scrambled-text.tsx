import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";

type ScrambledTextProps = {
    text: string,
    speed: number,
    className: string,
}

export default function ScrambledText({text, speed=50, className=""}: ScrambledTextProps) {
    
    const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*():{};|,.<>/?";
    const CYCLES_PER_LETTER = 2;
    const SHUFFLE_TIME = speed;
    const TARGET_TEXT = text;

    const Scrambler = ({className=""}) => {
        const intervalRef = useRef<NodeJS.Timeout | null>(null);
        const [text, setText] = useState(TARGET_TEXT);

        useEffect(() => {
            scramble();
            return () => {
                stopScramble();  
            };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const scramble = () => {
            let pos = 0;
            intervalRef.current = setInterval(() => {
                const scrambled = TARGET_TEXT.split("")
                    .map((char, index) => {
                        if (pos / CYCLES_PER_LETTER > index) {
                            return char;
                        }
                        const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                        const randomChar = CHARS[randomCharIndex];
                        return randomChar;
                    }).join("");
                    
                    setText(scrambled);
                    pos++
        
                    if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
                        stopScramble();
                    }
            }, SHUFFLE_TIME);
        };

        const stopScramble = () => {
            clearInterval(intervalRef.current || undefined);
            setText(TARGET_TEXT);
        };

        return (
            <motion.div
            onMouseEnter={scramble}
            onMouseLeave={stopScramble}
            className={`text-dark dark:text-light font-mono text-2xl ${className}`}>
                <div className="relative z-5 flex flex-col items-center font-bold">
                    {text}
                </div>
            </motion.div>
        );

    }

    return (
        <div className="flex items-start justify-center">
            <Scrambler className={className} />
        </div>
    );
};