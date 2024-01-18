import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        light: "#fffcfc",
        dark: "#020713",
        primary: "#99ccff",
        primaryDark: "#81e6d9",
        // primary: "#319795",
        // primaryDark: "#6666cc",
      },
    },
  },
  plugins: [
    ({ addBase }: any) => {
      addBase({
        // For WebKit browsers (Chrome, Safari)
        "::-webkit-scrollbar": {
          display: "none",
        },
        // For Firefox
        body: {
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
        },
      });
    },
  ],
};
export default config;
