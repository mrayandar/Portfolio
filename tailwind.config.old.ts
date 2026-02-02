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
        // Custom portfolio colors from SRS
        'dark-bg': '#0F172A',
        'electric-yellow': '#FACC15',
        'code-blue': '#3B82F6',
        'off-white': '#F8FAFC',
        'deep-charcoal': '#111111',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'fira-code': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;