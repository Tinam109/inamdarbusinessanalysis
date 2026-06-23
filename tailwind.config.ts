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
        // Base — deep navy / slate
        ink: {
          950: "#05080f",
          900: "#0a0f1c",
          800: "#0f1626",
          700: "#16203a",
          600: "#1e2b4a",
        },
        slate: {
          850: "#172033",
        },
        // Accents
        emerald: {
          DEFAULT: "#10b981",
          soft: "#34d399",
        },
        cyan: {
          DEFAULT: "#22d3ee",
          soft: "#67e8f9",
        },
        gold: {
          DEFAULT: "#d4a13c",
          soft: "#e8c477",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(34,211,238,0.10) 0%, transparent 70%)",
      },
      boxShadow: {
        glass: "0 8px 40px -12px rgba(2,8,23,0.6)",
        glow: "0 0 0 1px rgba(34,211,238,0.18), 0 8px 40px -8px rgba(16,185,129,0.25)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.7" },
          "70%": { transform: "scale(2)", opacity: "0" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
