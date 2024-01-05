import portfolio1 from "/public/project-images/portfolio-1.png";
import portfolio2 from "/public/project-images/portfolio-2.png";
import portfolio3 from "/public/project-images/portfolio-3.png";
import cnndigits from "/public/project-images/cnn-digits.png";
import akparticles from "/public/project-images/arknights-particles.png";
import portfolio4 from "/public/project-images/portfolio-4.png";

export const projectsData = [
    {
      title: "Personal Portfolio",
      description:
        "Migrated my Javascript portfolio to Typescript, including context providers and hooks with greater focus on extendability and responsiveness, as well as simple ThreeJS concepts.",
      tags: ["NextJS", "Tailwind", "Typescript", "ThreeJS"],
      imageUrl: portfolio4,
      demoLink: "https://yhanyi.vercel.app/",
      githubLink: "https://github.com/yhanyi/portfolio"
    },
    {
      title: "Arknights Particles",
      description:
        "Refactored old ThreeJS boilerplate code to reverse-engineer a particle effect from a game website. Passion project built while learning basic ThreeJS during freshman winter break.",
      tags: ["ThreeJS", "GLSL", "Typescript", "NextJS", "React"],
      imageUrl: akparticles,
      demoLink: "https://yeohhanyi-arknights-particles.vercel.app/",
      githubLink: "https://github.com/yhanyi/arknights-particles"
    },
    {
      title: "Digits Predictor",
      description:
        "A simple webapp that takes a user input drawn on a canvas object, converts it to features to be predicted by a pre-trained Tensorflow model, and Chart.js plots the confidence of the model.",
      tags: ["Tensorflow", "Chart.js", "HTML", "CSS"],
      imageUrl: cnndigits,
      demoLink: "https://yhanyi.github.io/cnn-digits/",
      githubLink: "https://github.com/yhanyi/cnn-digits"
    },
    {
        title: "Typescript Portfolio",
        description:
          "A single-page website with NextJS, built while learning Typescript and learning about context providers.",
        tags: ["Typescript", "React", "NextJS", "Tailwind"],
        imageUrl: portfolio3,
        demoLink: "https://yhy-react-v2.vercel.app/",
        githubLink: "https://github.com/yhanyi/react-portfolio-v2"
      },
      {
        title: "Javascript Portfolio",
        description:
          "First multi-page website using the NextJS framework in React, using Javascript and learning more about basic React hooks.",
        tags: ["Javascript", "React", "NextJS", "Tailwind"],
        imageUrl: portfolio2,
        demoLink: "https://yhy-react-v1.vercel.app/",
        githubLink: "https://github.com/yhanyi/react-portfolio-v1"
      },
      {
        title: "HTML & CSS Portfolio",
        description:
          "My first website, built while learning basic HTML, CSS and Javascript.",
        tags: ["HTML", "CSS", "Javascript"],
        imageUrl: portfolio1,
        demoLink: "https://yhanyi.github.io",
        githubLink: "https://github.com/yhanyi/yhanyi.github.io"
      },
] as const;