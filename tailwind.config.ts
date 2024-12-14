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
        myPink:"#F98585",
        myBlack:"#21243D",
        recentBackround:"#F4E2E2",
        background: "#f6f0f0",
        footerBackround:"#FAF5F5",
        heroElipse:"#dfd8d8",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
