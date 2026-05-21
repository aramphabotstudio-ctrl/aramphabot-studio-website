import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f4efe4",
        bone: "#fbf8f1",
        ink: "#1f1b16",
        charcoal: "#29241e",
        stone: "#d8cebd",
        linen: "#e9dfcf",
        taupe: "#817366",
        clay: "#9a6a4e",
        moss: "#58624f",
        umber: "#594132",
        bronze: "#b28a68",
        smoke: "#6b6962",
      },
      fontFamily: {
        sans: [
          "IBM Plex Sans",
          "Avenir Next",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "Instrument Serif",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(30, 27, 24, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
