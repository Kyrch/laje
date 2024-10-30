import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loveLiveBg': "url('/assets/images/loveLiveDays.png')",
      },
      colors: {
        'discord-dark': '#36393f',
        'discord-accent': '#7289da',
        'discord-text-muted': '#72767d',
        'loveLiveWhite': "#eceff5",
        'discordBlue': "#7289da", 
        'discordBlueSecondary':"#627bb6"
      },
    },
  },
  plugins: [],
};
export default config;