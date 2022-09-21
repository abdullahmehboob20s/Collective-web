/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      "source-sans-pro": "'Source Sans Pro', sans-serif",
    },
    colors: {
      "body-bg": "#272727",
      white: "white",
      black: "black",
      transparent: "transparent",
    },
    lineHeight: {
      1: 1,
      "1_1": "1.1",
      "1_2": "1.2",
      "1_3": "1.3",
      "1_4": "1.4",
      "1_5": "1.5",
      "1_6": "1.6",
      "1_7": "1.7",
      "1_8": "1.8",
      "1_9": "1.9",
    },
    extend: {
      spacing: {
        "1vw": "1vw",
        "1_2vw": "1.2vw",
        "1_4vw": "1.4vw",
        "1_6vw": "1.6vw",
        "1_8vw": "1.8vw",
        "2vw": "2vw",
        "2_2vw": "2.2vw",
        "2_4vw": "2.4vw",
        "2_6vw": "2.6vw",
        "2_8vw": "2.8vw",
        "3vw": "3vw",
        "4vw": "4vw",
        "5vw": "5vw",
        "6vw": "6vw",
        "7vw": "7vw",
      },
    },
  },
  plugins: [],
};
