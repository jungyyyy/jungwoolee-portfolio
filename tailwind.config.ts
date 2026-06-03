import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        border: "#222222",
        primary: "#F0EDE8",
        secondary: "#888888",
        accent: "#F5A623",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        pill: "999px",
      },
      boxShadow: {
        "amber-glow": "0 0 40px rgba(245, 166, 35, 0.15)",
        "amber-glow-strong": "0 0 60px rgba(245, 166, 35, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
