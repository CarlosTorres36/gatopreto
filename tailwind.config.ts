
import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "custom-xl": "1450px",
      },
    },
  },
  plugins: [scrollbarHide],
};


export default config;