const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: { 0: "#050505" },
        gold: { 0: "#A78B2C", 1: "#73642D" },
        light: { 0: "#D5D5D5" },
      },
    },
  },
  plugins: [],
};
export default config;
