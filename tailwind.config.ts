import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f5f1e8",
        bone: "#fbfaf6",
        ink: "#1e1b18",
        charcoal: "#2c2a25",
        stone: "#d9d1c2",
        linen: "#ebe4d7",
        taupe: "#8b7f70",
        clay: "#a36f55",
        moss: "#5d6756",
        umber: "#5f4434",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Avenir Next",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "Cormorant Garamond",
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
