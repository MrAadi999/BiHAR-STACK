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
        offwhite: {
          50: "#FAFAFA",
          100: "#F0F0F0", // GAZU Off-White Background
          200: "#E5E5E5",
          300: "#D4D4D4",
        },
        navy: {
          950: "#F0F0F0", // Updated to match GAZU background
          900: "#F5F5F5",
          800: "#E5E5E5",
          700: "#D4D4D4",
        },
        electric: {
          500: "#000000", // Sleek Pure Black Accent
          600: "#000000",
          700: "#171717",
        },
        glow: {
          cyan: "#262626",
          sky: "#404040",
          blue: "#000000",
          indigo: "#171717",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 240, 0.7) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "marquee": "marquee 35s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "glass": "0 8px 30px rgba(0, 0, 0, 0.06)",
        "blue-glow": "0 10px 30px rgba(0, 0, 0, 0.12)",
        "cyan-glow": "0 10px 30px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
