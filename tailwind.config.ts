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
        navy: {
          DEFAULT: "#14283F",
          50: "#F0F4F8",
          100: "#D9E3EC",
          200: "#B3C7DA",
          300: "#80A3C2",
          400: "#4D7FA9",
          500: "#2B608F",
          600: "#1E476C",
          700: "#183754",
          800: "#14283F",
          900: "#0D1B2A",
        },
        charcoal: {
          DEFAULT: "#202833",
          50: "#F8F9FA",
          100: "#E9ECEF",
          200: "#CED4DA",
          300: "#ADB5BD",
          400: "#6C757D",
          500: "#495057",
          600: "#343A40",
          700: "#2B303A",
          800: "#202833",
          900: "#141A22",
        },
        construction: {
          DEFAULT: "#F28C28",
          50: "#FEF7EE",
          100: "#FDEED7",
          200: "#FBDAB0",
          300: "#F8C182",
          400: "#F5A653",
          500: "#F28C28",
          600: "#D97011",
          700: "#AD530C",
          800: "#8B4210",
          900: "#713711",
        },
        surface: {
          DEFAULT: "#F4F6F8",
          alt: "#EAEFF4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
