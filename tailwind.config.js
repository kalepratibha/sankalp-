/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#17261C",
        forest2: "#223526",
        forest3: "#2C4531",
        stone: "#F6F2E9",
        stone2: "#ECE5D3",
        brass: "#A9814A",
        gold: "#C9A961",
        sage: "#7C8F6B",
        charcoal: "#201F1B",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
