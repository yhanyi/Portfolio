"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/experiences-data";
import { useTheme } from "@/components/theme-context";

export default function Experiences() {
  const { theme } = useTheme();

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
                <ul className="flex flex-wrap gap-2 my-2 sm:my-5">
                  {item.tags.map((tag, index) => (
                    <li
                      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                      key={index}
                    >
                      {tag}
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
