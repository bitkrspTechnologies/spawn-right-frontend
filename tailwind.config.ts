import { Roboto_Serif } from 'next/font/google';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",

    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // highlightColor: '#FF1ADF',

        "highlight-color": "var(--highlight)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        roboto_serif :['Roboto_Serif']
      },
    },
  },
  plugins: [],
};

export default config;
