import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E63946",
          yellow: "#FFD23F",
          black: "#0B0B0B",
          cream: "#FFF8EC",
          green: "#06A77D",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
        wiggle: "wiggle 0.6s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
