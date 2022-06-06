module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "#657fde",
      slate: "#31324a",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
