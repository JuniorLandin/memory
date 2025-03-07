import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "var(--primary-100)",
        "primary-150": "var(--primary-150)",
        "primary-200": "var(--primary-200)",
        rosa: "var(--rosa-100)",
      },
    },
  },
  plugins: [],
} satisfies Config;
