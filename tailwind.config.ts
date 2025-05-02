import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themewhite: "var(--white)",
        themelightblack: "var(--lightblack)",
        themeblack: "var(--black)",
        themeblue: "var(--blue)",
        themegray: "var(--gray)",
        themeblueprint: "var(--blueprint)",
      },
    },
  },
  plugins: [],
} satisfies Config;
