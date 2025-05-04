import type { Config } from 'tailwindcss';

const config: Config = {
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
      },
    },
  },
  plugins: [],
};

export default config;
