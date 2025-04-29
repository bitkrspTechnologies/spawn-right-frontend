

// import { colors as customColors } from "./src/constant/color";

// const config = {
//   theme: {
//     extend: {
//       backgroundImage: {
//         bgMainColor: customColors.bgMainColor
//       },
//       colors: {
//         primaryGradient : customColors.primaryGradient
//       }
//     }
//   }
// }


// tailwind.config.ts or tailwind.config.js

/** @type {import('tailwindcss').Config} */
import { colors as customColors } from "./src/constant/color";


const config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-main':customColors.bgMainColor
      },
      colors: {
        primaryGradient : customColors.primaryGradient
      },
    },
  },
  plugins: [],
};

export default config;
