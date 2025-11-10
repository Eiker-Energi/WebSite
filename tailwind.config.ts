import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./content/**/*.{md,mdx}", "./pages/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        teal: {
          900: "#0A4A57",
        },
        mint: {
          400: "#59C1B5",
        },
        sand: {
          100: "#FAF3E0",
        },
        text: {
          900: "#0F2D32",
        },
      },
      boxShadow: {
        soft: "0 20px 35px rgba(10, 74, 87, 0.12)",
      },
      fontFamily: {
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};

export default config;
