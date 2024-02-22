import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { Fa500Px, FaLaptopCode, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    title: "Year 1 Semester 2",
    location: "National University of Singapore",
    icon: React.createElement(FaLaptopCode),
    date: "January 2024 - May 2024",
    description: [
      "Semester GPA: - | Cumulative GPA: -",
      "Relevant Modules:",
      "- CS2040S - Data Structures and Algorithms [Taking]",
      "- CS2100 - Computer Organisation [Taking]",
      "- ST2334 - Probability and Statistics [Taking]",
      "Activities and Societies:",
      "- NUS.AI Interest Group",
      "- RC4 OrcaCode",
      "- RC4 Basketball",
      "Competitions and Events:",
      "- Health Hack 2024",
    ],
  },
  {
    title: "Year 1 Semester 1",
    location: "National University of Singapore",
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - December 2023",
    description: [
      "Semester GPA: 4.625 | Cumulative GPA: 4.6",
      "Relevant Modules:",
      "- CS1010X - Programming Methodology I [A-]",
      "- CS1231S - Discrete Structures [A-]",
      "- CS2030S - Programming Methodology II [A-]",
      "- MA1521 - Calculus For Computing [A]",
      "- MA1522 - Linear Algebra For Computing [B+]",
    ],
  },

  {
    title: "GCE A-Levels",
    location: "Dunman High School",
    date: "January 2015 - December 2020",
    icon: React.createElement(LuGraduationCap),
    description: [
      "Grade: 88.75/90 Rank Points",
      "Studied H3 Physics, H2 Physics, H2 Chemistry, H2 Mathematics, H2 Economics",
    ],
  },
] as const;
