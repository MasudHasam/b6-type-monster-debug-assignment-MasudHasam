/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#db3f63",

          "secondary": "#ed5573",

          "accent": "#30d802",

          "neutral": "#222730",

          "base-100": "#F7F6F8",

          "info": "#AABAE4",

          "success": "#1DDD73",

          "warning": "#F7C455",

          "error": "#E43A4B",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
