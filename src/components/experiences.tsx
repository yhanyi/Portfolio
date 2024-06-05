"use client";

import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/experiences-data";
import { useTheme } from "@/components/theme-context";
import SkillHover from "@/components/skill-hover";

export default function Experiences() {
  const { theme } = useTheme();
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
    <div>
      <VerticalTimeline
        lineColor={theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)"}
        animate={true}
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.5rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>

              <div className="mt-2 sm:mt-5">
                {item.description.map((info, id) => (
                  <React.Fragment key={id}>
                    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                      {info}
                    </p>
                  </React.Fragment>
                ))}
              </div>

              {item.tags ? (
                <ul className="flex flex-wrap gap-2 my-2 sm:my-5 justify-between">
                  {item.tags.map((tag, id) => (
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
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
  );
}
