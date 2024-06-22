/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { Cloud, ICloud } from "react-icon-cloud";
import Image from "next/image";
import { skillSvgs } from "@/lib/skills-data";

const s = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

const guid = () => `${s()}${s()}-${s()}-${s()}-${s()}-${s()}${s()}${s()}`;

const renderSimpleIcon = ({
  aProps = {},
  localSvgPath,
  icon,
  imgProps = {},
  size = 42,
}: {
  aProps: React.DetailedHTMLProps<
    React.AllHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
  localSvgPath: string;
  icon: any;
  imgProps: Omit<
    React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    "src"
  >;
  size: number;
}) => {
  const a = {
    key: guid(),
    title: icon.title,
    style: { cursor: "pointer" },
    ...aProps,
  };

  const i = {
    height: size,
    width: size,
    alt: icon.title,
    src: localSvgPath,
    ...imgProps,
  };

  return (
    <a {...a}>
      <img {...i} />
    </a>
  );
};

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: true,
  },
};

type DynamicCloudProps = {
  iconPaths: string[];
};

function IconCloud({ iconPaths }: DynamicCloudProps) {
  const renderedIcons = useMemo(() => {
    return iconPaths.map((iconPath, index) =>
      renderSimpleIcon({
        icon: { title: `icon-${index}`, path: "" },
        localSvgPath: iconPath,
        size: 42,
        aProps: {},
        imgProps: {},
      })
    );
  }, [iconPaths]);

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
}

export default function SkillsGlobe() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="flex flex-col md:flex-row justify-center items-center"
      ref={sectionRef}
    >
      <div className="flex dark:hidden max-w-[32rem] items-center justify-center overflow-hidden">
        {isVisible && <IconCloud iconPaths={skillSvgs.light} />}
      </div>
      <div className="hidden dark:flex max-w-[32rem] items-center justify-center overflow-hidden">
        {isVisible && <IconCloud iconPaths={skillSvgs.dark} />}
      </div>
    </section>
  );
}
