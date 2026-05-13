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
        argus: {
          navy: "#061428",
          deep: "#0a1f3d",
          blue: "#0c4a8c",
          sky: "#1e6fd9",
          ice: "#e8f1ff",
          mist: "#f4f8ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(to right, rgba(30,111,217,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,111,217,0.06) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(30,111,217,0.35), transparent)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(6, 20, 40, 0.12), inset 0 1px 0 rgba(255,255,255,0.15)",
        panel: "0 4px 24px rgba(6, 20, 40, 0.08)",
      },
      animation: {
        shimmer: "shimmer 2.5s ease-in-out infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        pulseSlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.02)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
