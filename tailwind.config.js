/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
	theme: {
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
	},
	plugins: [require("flowbite/plugin")],
};
