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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backdropBlur: {
        xl: "20px",
      },
    },
  },
  plugins: [],
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [],
    },
  },
};

export default config;
