import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand — deep navy. Used for headings, the logo and dark accents.
        brand: {
          DEFAULT: "#15244d",
          50: "#eef2fb",
          100: "#dde4f4",
          200: "#c0cde8",
          300: "#94a8d3",
          400: "#6480b6",
          500: "#42609b",
          600: "#324b7d",
          700: "#283c63",
          800: "#1c2c4b",
          900: "#131f37",
          950: "#0b1428",
        },
        // Single accent — emerald. Used sparingly for CTAs and highlights.
        accent: {
          DEFAULT: "#059669",
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(21,36,77,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,36,77,0.05) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(5,150,105,0.08) 0%, transparent 70%)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,20,40,0.04), 0 8px 24px -12px rgba(11,20,40,0.10)",
        lift: "0 1px 3px rgba(11,20,40,0.05), 0 18px 40px -16px rgba(11,20,40,0.18)",
        card: "0 1px 0 rgba(255,255,255,0.6) inset, 0 1px 2px rgba(11,20,40,0.05), 0 12px 30px -14px rgba(11,20,40,0.16)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "70%": { transform: "scale(2)", opacity: "0" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(260px)", opacity: "0" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        scan: "scan 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
