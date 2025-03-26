
import { type Config } from "tailwindcss";


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {

        primary: "#FFC107",
        secondary: "#3DBEF3",
        background: "#0B1838",
        bgSecondary: "#111928",
        bgService: "#060314",
        overlay: "rgba(17,24,39, 0.7)",
        textPrimary: "#FFFFFF",
        textSecondary: "#9CA3AF",
        borderColor: "#3A3A3A",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        btn: "0px 4px 6px rgba(255, 193, 7, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
