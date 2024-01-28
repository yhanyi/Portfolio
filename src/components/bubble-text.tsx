import React from "react";
import styles from "../lib/bubble.module.css";

type BubbleProps = {
  text: string;
  className: string;
};

export default function BubbleText({ text, className }: BubbleProps) {
  return (
    <h2 className={`${className} text-center`}>
      {text.split("").map((child: any, idx: any) => (
        <span
          className={`${styles.hoverText} hover:text-primaryDark dark:hover:text-primary`}
          key={idx}
        >
          {child}
        </span>
      ))}
    </h2>
  );
}
