/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        Navy850: "hsl(217, 28%, 15%)",
        Navy900: "hsl(218, 28%, 13%)",
        Navy950: "hsl(216, 53%, 9%)",
        Navy800: "hsl(219, 30%, 18%)",

        // Accent
        Teal200: "hsl(176, 68%, 64%)",
        Cyan500: "hsl(198, 60%, 50%)",
        Red500: "hsl(0, 100 %, 63 %)",

        // Neutral
        White: "hsl(0, 0%, 100%)",
      },

      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
