import portfolio1 from "/public/project-images/portfolio-1.png";
import portfolio2 from "/public/project-images/portfolio-2.png";
import portfolio3 from "/public/project-images/portfolio-3.png";
import cnndigits from "/public/project-images/cnn-digits.png";
import akparticles from "/public/project-images/arknights-particles.png";
import portfolio4 from "/public/project-images/portfolio-4.png";
import senpaigpt from "/public/project-images/senpaigpt.png";
import tradingbotnotebook from "/public/project-images/tradingbotnotebook.png";
import placeholder from "/public/project-images/placeholder.png";

export const projectsData = [
  {
    title: "??? ",
    description: "[WIP] Orbital project.",
    date: "May 2024 - Present",
    imageUrl: placeholder,
    demoLink: null,
    githubLink: null,
    tags: [
      {
        srclight: "/skills-images/python.svg",
        srcdark: "/skills-images/python.svg",
        title: "Python",
      },
      {
        srclight: "/skills-images/typescript.svg",
        srcdark: "/skills-images/typescript.svg",
        title: "Typescript",
      },
      {
        srclight: "/skills-images/nextjs.svg",
        srcdark: "/skills-images/nextjs-dark.svg",
        title: "NextJS",
      },
      {
        srclight: "/skills-images/tailwind.svg",
        srcdark: "/skills-images/tailwind.svg",
        title: "Tailwind",
      },
      {
        srclight: "/skills-images/pytorch.svg",
        srcdark: "/skills-images/pytorch.svg",
        title: "Pytorch",
      },
      {
        srclight: "/skills-images/flask.svg",
        srcdark: "/skills-images/flask-dark.svg",
        title: "Flask",
      },
      {
        srclight: "/skills-images/alpaca.svg",
        srcdark: "/skills-images/alpaca.svg",
        title: "Alpaca",
      },
      {
        srclight: "/skills-images/huggingface.svg",
        srcdark: "/skills-images/huggingface.svg",
        title: "Finbert",
      },
      {
        srclight: "/skills-images/firebase.svg",
        srcdark: "/skills-images/firebase.svg",
        title: "Firebase",
      },
    ],
  },
  {
    title: "???",
    description: "[WIP] Mini project for fun :)",
    date: "May 2024 - Present",
    imageUrl: placeholder,
    demoLink: null,
    githubLink: null,
    tags: [
      {
        srclight: "/skills-images/cplusplus.svg",
        srcdark: "/skills-images/cplusplus.svg",
        title: "C++",
      },
      {
        srclight: "/skills-images/rust.svg",
        srcdark: "/skills-images/rust-dark.svg",
        title: "Rust",
      },
    ],
  },
  {
    title: "???",
    description: "[WIP] Mini project for fun :)",
    date: "May 2024 - Present",
    imageUrl: placeholder,
    demoLink: null,
    githubLink: null,
    tags: [
      {
        srclight: "/skills-images/cplusplus.svg",
        srcdark: "/skills-images/cplusplus.svg",
        title: "C++",
      },
      {
        srclight: "/skills-images/mlpack.svg",
        srcdark: "/skills-images/mlpack.svg",
        title: "MLPack",
      },
    ],
  },
  {
    title: "Pytorch Trading Bot",
    description:
      "Learnt the basics of how to use Pytorch models (like Finbert) to analyze news sentiments and use it to make simple paper trading predictions. The news data is provided by Alpaca.",
    date: "February 2024",
    imageUrl: tradingbotnotebook,
    demoLink:
      "https://colab.research.google.com/github/yhanyi/MLNotebooks/blob/main/TradingBotTutorial.ipynb",
    githubLink:
      "https://github.com/yhanyi/MLNotebooks/blob/main/TradingBotTutorial.ipynb",
    tags: [
      {
        srclight: "/skills-images/python.svg",
        srcdark: "/skills-images/python.svg",
        title: "Python",
      },
      {
        srclight: "/skills-images/pytorch.svg",
        srcdark: "/skills-images/pytorch.svg",
        title: "Pytorch",
      },
      {
        srclight: "/skills-images/huggingface.svg",
        srcdark: "/skills-images/huggingface.svg",
        title: "HuggingFace",
      },
      {
        srclight: "/skills-images/alpaca.svg",
        srcdark: "/skills-images/alpaca.svg",
        title: "Alpaca",
      },
    ],
  },
  {
    title: "SenpaiGPT",
    description:
      "Quick ChatGPT clone made so I can use GPT-4.0's API without using paying 20 USD a month. Chats are stored in Firebase. Link redacted since anyone with a Google account can login and use my API :/",
    date: "January 2024",
    imageUrl: senpaigpt,
    demoLink: null,
    githubLink: null,
    tags: [
      {
        srclight: "/skills-images/nextjs.svg",
        srcdark: "/skills-images/nextjs-dark.svg",
        title: "NextJS",
      },
      {
        srclight: "/skills-images/typescript.svg",
        srcdark: "/skills-images/typescript.svg",
        title: "Typescript",
      },
      {
        srclight: "/skills-images/openai.svg",
        srcdark: "/skills-images/openai-dark.svg",
        title: "OpenAI",
      },
      {
        srclight: "/skills-images/firebase.svg",
        srcdark: "/skills-images/firebase.svg",
        title: "Firebase",
      },
    ],
  },
  {
    title: "Personal Portfolio",
    description:
      "Migrated my Javascript portfolio to Typescript, including context providers and hooks with greater focus on extendability and responsiveness, as well as simple ThreeJS concepts.",
    date: "January 2024 - Present",
    imageUrl: portfolio4,
    demoLink: "https://yeohhanyi.vercel.app/",
    githubLink: null,
    tags: [
      {
        srclight: "/skills-images/nextjs.svg",
        srcdark: "/skills-images/nextjs-dark.svg",
        title: "NextJS",
      },
      {
        srclight: "/skills-images/typescript.svg",
        srcdark: "/skills-images/typescript.svg",
        title: "Typescript",
      },
      {
        srclight: "/skills-images/tailwind.svg",
        srcdark: "/skills-images/tailwind.svg",
        title: "Tailwind",
      },
      {
        srclight: "/skills-images/threejs.svg",
        srcdark: "/skills-images/threejs-dark.svg",
        title: "ThreeJS",
      },
    ],
  },
  {
    title: "Arknights Particles",
    description:
      "Refactored old ThreeJS boilerplate code to reverse-engineer a particle effect from a game website. Passion project built while learning basic ThreeJS during freshman winter break.",
    date: "December 2023 - January 2024",
    imageUrl: akparticles,
    demoLink: "https://yeohhanyi-arknights-particles.vercel.app/",
    githubLink: "https://github.com/yhanyi/ArknightsParticles",
    tags: [
      {
        srclight: "/skills-images/nextjs.svg",
        srcdark: "/skills-images/nextjs-dark.svg",
        title: "NextJS",
      },
      {
        srclight: "/skills-images/typescript.svg",
        srcdark: "/skills-images/typescript.svg",
        title: "Typescript",
      },
      {
        srclight: "/skills-images/threejs.svg",
        srcdark: "/skills-images/threejs-dark.svg",
        title: "ThreeJS",
      },
    ],
  },
  {
    title: "Digits Predictor",
    description:
      "A simple webapp that takes a user input drawn on a canvas object, converts it to features to be predicted by a pre-trained Tensorflow model, and Chart.js plots the confidence of the model.",
    date: "December 2023",
    imageUrl: cnndigits,
    demoLink: "https://yhanyi.github.io/CNNDigits/",
    githubLink: "https://github.com/yhanyi/CNNDigits",
    tags: [
      {
        srclight: "/skills-images/tensorflow.svg",
        srcdark: "/skills-images/tensorflow.svg",
        title: "Tensorflow",
      },
      {
        srclight: "/skills-images/chartjs.svg",
        srcdark: "/skills-images/chartjs.svg",
        title: "Chart.js",
      },
      {
        srclight: "/skills-images/html5.svg",
        srcdark: "/skills-images/html5.svg",
        title: "HTML5",
      },
      {
        srclight: "/skills-images/css3.svg",
        srcdark: "/skills-images/css3.svg",
        title: "CSS3",
      },
    ],
  },
  {
    title: "Typescript Portfolio",
    description:
      "A single-page website with NextJS, built while learning Typescript and learning about context providers.",
    date: "December 2023",
    imageUrl: portfolio3,
    demoLink: "https://yeohhanyi2.vercel.app/",
    githubLink: null,
    tags: [
      {
        srclight: "/skills-images/nextjs.svg",
        srcdark: "/skills-images/nextjs-dark.svg",
        title: "NextJS",
      },
      {
        srclight: "/skills-images/typescript.svg",
        srcdark: "/skills-images/typescript.svg",
        title: "Typescript",
      },
      {
        srclight: "/skills-images/tailwind.svg",
        srcdark: "/skills-images/tailwind.svg",
        title: "Tailwind",
      },
      {
        srclight: "/skills-images/react.svg",
        srcdark: "/skills-images/react.svg",
        title: "React",
      },
    ],
  },
  {
    title: "Javascript Portfolio",
    description:
      "First multi-page website using the NextJS framework in React, using Javascript and learning more about basic React hooks.",
    date: "December 2023",
    imageUrl: portfolio2,
    demoLink: "https://yhy-react-test.vercel.app/",
    githubLink: null,
    tags: [
      {
        srclight: "/skills-images/nextjs.svg",
        srcdark: "/skills-images/nextjs-dark.svg",
        title: "NextJS",
      },
      {
        srclight: "/skills-images/javascript.svg",
        srcdark: "/skills-images/javascript.svg",
        title: "Javascript",
      },
      {
        srclight: "/skills-images/tailwind.svg",
        srcdark: "/skills-images/tailwind.svg",
        title: "Tailwind",
      },
      {
        srclight: "/skills-images/react.svg",
        srcdark: "/skills-images/react.svg",
        title: "React",
      },
    ],
  },
  {
    title: "HTML & CSS Portfolio",
    description:
      "My first website, built while learning basic HTML, CSS and Javascript.",
    date: "December 2023",
    imageUrl: portfolio1,
    demoLink: null,
    githubLink: null,
    tags: [
      {
        srclight: "/skills-images/javascript.svg",
        srcdark: "/skills-images/javascript.svg",
        title: "Javascript",
      },
      {
        srclight: "/skills-images/html5.svg",
        srcdark: "/skills-images/html5.svg",
        title: "HTML5",
      },
      {
        srclight: "/skills-images/css3.svg",
        srcdark: "/skills-images/css3.svg",
        title: "CSS3",
      },
    ],
  },
] as const;
