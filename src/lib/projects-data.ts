import portfolio1 from "/public/project-images/portfolio-1.png";
import portfolio2 from "/public/project-images/portfolio-2.png";
import portfolio3 from "/public/project-images/portfolio-3.png";
import cnndigits from "/public/project-images/cnn-digits.png";
import akparticles from "/public/project-images/arknights-particles.png";
import portfolio4 from "/public/project-images/portfolio-4.png";
import astroblog1 from "/public/project-images/astroblog1.png";
import senpaigpt from "/public/project-images/senpaigpt.png";
import tradingbotnotebook from "/public/project-images/tradingbotnotebook.png";

export const projectsData = [
  {
    title: "Pytorch Trading Bot",
    description:
      "Learnt the basics of how to use Pytorch models (like Finbert) to analyze news sentiments and use it to make simple paper trading predictions. The news data is provided by Alpaca.",
    tags: ["Pytorch", "AlpacaAPI", "Python", "Finbert"],
    imageUrl: tradingbotnotebook,
    demoLink:
      "https://colab.research.google.com/github/yhanyi/MLNotebooks/blob/main/TradingBotTutorial.ipynb",
    githubLink:
      "https://github.com/yhanyi/MLNotebooks/blob/main/TradingBotTutorial.ipynb",
  },
  {
    title: "SenpaiGPT",
    description:
      "Quick ChatGPT clone made so I can use GPT-4.0's API without using paying 20 USD a month. Chats are stored in Firebase. Link redacted since anyone with a Google account can login and use my API :/",
    tags: ["OpenAI", "GPT", "NextJS", "Firebase"],
    imageUrl: senpaigpt,
    demoLink: null,
    githubLink: null,
  },
  {
    title: "Astro Blog",
    description:
      "Maintaining a personal blog to explore the Astro framework. Template provided by Astro Cactus.",
    tags: ["Astro", "Tailwind", "Typescript"],
    imageUrl: astroblog1,
    demoLink: null,
    githubLink: null,
  },
  {
    title: "Personal Portfolio",
    description:
      "Migrated my Javascript portfolio to Typescript, including context providers and hooks with greater focus on extendability and responsiveness, as well as simple ThreeJS concepts.",
    tags: ["NextJS", "Tailwind", "Typescript", "ThreeJS"],
    imageUrl: portfolio4,
    demoLink: "https://yeohhanyi.vercel.app/",
    githubLink: null,
  },
  {
    title: "Arknights Particles",
    description:
      "Refactored old ThreeJS boilerplate code to reverse-engineer a particle effect from a game website. Passion project built while learning basic ThreeJS during freshman winter break.",
    tags: ["ThreeJS", "GLSL", "Typescript", "NextJS", "React"],
    imageUrl: akparticles,
    demoLink: "https://yeohhanyi-arknights-particles.vercel.app/",
    githubLink: "https://github.com/yhanyi/ArknightsParticles",
  },
  {
    title: "Digits Predictor",
    description:
      "A simple webapp that takes a user input drawn on a canvas object, converts it to features to be predicted by a pre-trained Tensorflow model, and Chart.js plots the confidence of the model.",
    tags: ["Tensorflow", "Chart.js", "HTML", "CSS"],
    imageUrl: cnndigits,
    demoLink: "https://yhanyi.github.io/CNNDigits/",
    githubLink: "https://github.com/yhanyi/CNNDigits",
  },
  {
    title: "Typescript Portfolio",
    description:
      "A single-page website with NextJS, built while learning Typescript and learning about context providers.",
    tags: ["Typescript", "React", "NextJS", "Tailwind"],
    imageUrl: portfolio3,
    demoLink: "https://yeohhanyi2.vercel.app/",
    githubLink: null,
  },
  {
    title: "Javascript Portfolio",
    description:
      "First multi-page website using the NextJS framework in React, using Javascript and learning more about basic React hooks.",
    tags: ["Javascript", "React", "NextJS", "Tailwind"],
    imageUrl: portfolio2,
    demoLink: "https://yhy-react-test.vercel.app/",
    githubLink: null,
  },
  {
    title: "HTML & CSS Portfolio",
    description:
      "My first website, built while learning basic HTML, CSS and Javascript.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: portfolio1,
    demoLink: null,
    githubLink: null,
  },
] as const;
