import React, { useEffect, useState } from "react";
import SkillHover from "./skill-hover";
import { experiencesData } from "@/lib/experiences-data";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string[];
  tags?: any;
}

const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tags,
}: Props) => {
  const [dimension, setDimension] = useState(50);
  const updateDimension = () => {
    if (typeof window !== "undefined") {
      setDimension(window.innerWidth >= 768 ? 30 : 20);
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
  return (
    <div className="my-10">
      <div className="flex justify-between mb-5 flex-col sm:flex-row">
        <div className="flex flex-col">
          <span className="font-bold text-base sm:text-lg md:text-xl">
            {title}
          </span>
          <span className="font-bold text-sm md:text-base">{position}</span>
        </div>

        <span className="text-sm md:text-base ">{time}</span>
      </div>

      {description.map((item) => (
        <p key={item} className="mb-6 leading-relaxed text-sm sm:text-base">
          {item}
        </p>
      ))}

      {tags ? (
        <ul className="flex flex-wrap gap-5 mb-10 p-5">
          {tags.map((tag: any, id: number) => (
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
      ) : null}
    </div>
  );
};

export default function Experience() {
  return (
    <section className="section-wrapper">
      {experiencesData.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
}
