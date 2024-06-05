import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TbDeviceComputerCamera } from "react-icons/tb";

export const experiencesData = [
  {
    title: "Software Engineering Intern [ONGOING]",
    location: " @ Kabam Robotics",
    icon: React.createElement(TbDeviceComputerCamera),
    date: "May 2024 - August 2024",
    description: [
      "Video Analytics Department",
      "• Implementing object-based alert throttling",
      "• ???",
    ],
    tags: [
      {
        srclight: "/skills-images/python.svg",
        srcdark: "/skills-images/python.svg",
        title: "Python",
      },
      {
        srclight: "/skills-images/cplusplus.svg",
        srcdark: "/skills-images/cplusplus.svg",
        title: "C++",
      },
      {
        srclight: "/skills-images/docker.svg",
        srcdark: "/skills-images/docker.svg",
        title: "Docker",
      },
      {
        srclight: "/skills-images/opencv.svg",
        srcdark: "/skills-images/opencv.svg",
        title: "OpenCV",
      },
      {
        srclight: "/skills-images/ros.svg",
        srcdark: "/skills-images/ros.svg",
        title: "ROS",
      },
      {
        srclight: "/skills-images/aws.svg",
        srcdark: "/skills-images/aws-dark.svg",
        title: "AWS",
      },
      {
        srclight: "/skills-images/bitbucket.svg",
        srcdark: "/skills-images/bitbucket.svg",
        title: "Bitbucket",
      },
      {
        srclight: "/skills-images/jira.svg",
        srcdark: "/skills-images/jira.svg",
        title: "Jira",
      },
    ],
  },
  {
    title: "Year 1 Semester 2",
    location: "@ National University of Singapore",
    icon: React.createElement(FaLaptopCode),
    date: "January 2024 - May 2024",
    description: [
      "Semester GPA: 4.5 | Cumulative GPA: 4.55",
      "Relevant Modules:",
      "• CS2040S - Data Structures and Algorithms",
      "• CS2100 - Computer Organisation",
      "• ST2334 - Probability and Statistics",
      "Activities and Societies:",
      "• NUS.AI (Vice-President)",
      "• RC4 OrcaCode",
      "• RC4 Basketball",
      "Competitions and Events:",
      "• Health Hack 2024",
    ],
    tags: null,
  },
  {
    title: "Year 1 Semester 1",
    location: "@ National University of Singapore",
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - December 2023",
    description: [
      "Semester GPA: 4.625 | Cumulative GPA: 4.6",
      "Relevant Modules:",
      "• CS1010X - Programming Methodology I",
      "• CS1231S - Discrete Structures",
      "• CS2030S - Programming Methodology II",
      "• MA1521 - Calculus For Computing",
      "• MA1522 - Linear Algebra For Computing",
    ],
    tags: null,
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
    tags: null,
  },
] as const;
