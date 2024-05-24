const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      skew: {
        45: "45deg",
        30: "30deg",
        90: "90deg",
        89: "89deg",
        135: "135deg",
        180: "180deg",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
