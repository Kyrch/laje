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
        'discord-dark': '#36393f',
        'discord-accent': '#7289da',
        'discord-text-muted': '#72767d',
      },
    },
  },
  plugins: [],
};
export default config;