import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { display: ["var(--font-display)", "sans-serif"], body: ["var(--font-body)", "sans-serif"] },
      colors: { ink: "#070B17", electric: "#5A7CFF", rose: "#F05AAD" },
      boxShadow: { glow: "0 0 32px rgba(90, 124, 255, .25)" },
    },
  },
  plugins: [],
};

export default config;
