import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#E11D74",
          pinkHover: "#C21561",
          pinkDark: "#9D0D4B",
          pinkLight: "#FFF0F6",
          pinkSoft: "#FCE7F3",
          yellow: "#F59E0B",
          yellowHover: "#D97706",
          yellowLight: "#FEF3C7",
          blue: "#0284C7",
          blueHover: "#0369A1",
          blueLight: "#E0F2FE",
          green: "#059669",
          greenLight: "#D1FAE5",
          purple: "#7C3AED",
          purpleLight: "#EDE9FE",
          orange: "#EA580C",
          orangeLight: "#FFEDD5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(225, 29, 116, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        card: "0 10px 30px -4px rgba(0, 0, 0, 0.05), 0 4px 10px -2px rgba(0, 0, 0, 0.02)",
        glow: "0 0 25px rgba(225, 29, 116, 0.25)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-gentle": "pulseGentle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGentle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
