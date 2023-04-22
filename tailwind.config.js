/** @type {import('tailwindcss').Config} */
export default {
     content: ["./index.hmtl", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
          extend: {
               fontFamily: {
                    pacifico: ["Pacifico", "sans-serif"],
                    julius: ["Julius Sans One", "sans-serif"],
                    raleway: ["Raleway", "sans-serif"],
               },
               colors: {
                    primary: "#28559C",
                    secondary: "#53B6DD",
               },
          },
     },
     plugins: [],
};
