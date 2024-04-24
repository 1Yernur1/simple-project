import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		textColor: {
			primary: "#111827",
			"primary-light": "#1F2534",
			secondary: "#6B7589",
			ternary: "#FFFFFF",
			"ternary-light": "#ffffffd9",
			"ternary-dark": "#ffffffbf",
			quaternary: "#862FE7",
			"quaternary-dark": "#5F259E",
			quinary: "#3F4654",
			orange: "#DC5F05",
			pink: "#E22BA4",
		},
		colors: {
			white: "#FFFFFF",
			primary: "#862FE7",
			"primary-light": "#BD8FF0",
			secondary: "#6B7589",
			"secondary-light": "#001b790a",
      ternary: "#0E1320",
      quaternary: "#3F4654",
			quinary: "#EBDAFD",
		},
		container: {
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1200px",
				"2xl": "1200px",
			}
		}
	},
	plugins: [],
};
export default config;
