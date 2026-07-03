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
        background: "#F7F4EF",
        "bg-alt": "#EEEAE2",
        surface: "#FFFFFF",
        border: "#DDD8D0",
        primary: "#1A1A1A",
        secondary: "#6B6560",
        accent: "#E8522A",
        "accent-2": "#F2A65A",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "8px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 2px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
