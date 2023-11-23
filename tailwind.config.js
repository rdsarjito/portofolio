/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        min: "1080px",
      },
      fontSize: {
        m2: "48px",
      },
      animation: {
        "spin-slow": "spin 9s linear infinite",
      },
      fontFamily: {
        times: "Times New Roman, Times, serif",
      },
      colors: {
        "dark-blue": "#14213d",
        "dark-blue-1": "#142b6f",
        "light-1": "#F4F4F4",
        purple: "#cdb4ff",
        green: "#B4FFC9",
        "min-b": "rgba(255,255,255,.2)",
      },
      boxShadow: {
        "btn-r": "4px 4px 0",
        "btn-l": "-4px 4px 0",
        "btn-raised": "5px 5px 0",
        test: "3px 3px 0",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
    visibility: ["group-hover"],
  },
  plugins: [],
};
