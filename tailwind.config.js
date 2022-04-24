const defaultTheme = require("tailwindcss/defaultTheme");

// For the typography plugin, we prefer Element Modifiers over direct CSS
// configuration here. Should only use this for stuff that cannot be applied
// via Element Modifiers.
// - Also note that CSS config here has less specificity than Element Modifiers
// (this uses :where() while modifier uses :is())
// - https://tailwindcss.com/docs/typography-plugin#element-modifiers
// - https://tailwindcss.com/docs/typography-plugin#customizing-the-css
const typography = (_theme) => ({
	DEFAULT: {
		css: {
			// Define here so that Tailwind's "pre code" can override them
			code: { padding: "0.2em 0.4em", fontWeight: 400 },
			"h1 code": { fontWeight: "inherit" },
			"h2 code": { fontWeight: "inherit" },
			"h3 code": { fontWeight: "inherit" },
			// Matches both <pre> and <code>
			'[data-theme="dark"]': { display: "none" },
		},
	},
	invert: {
		css: {
			'[data-theme="light"]': { display: "none" },
			// Reverse the "DEFAULT" style
			'pre[data-theme="dark"]': { display: "block" },
			'code[data-theme="dark"]': { display: "inline" },
		},
	},
});

module.exports = {
	content: ["./pages/**/*.{ts,tsx,mdx}", "./lib/**/*.{ts,tsx,mdx}"],
	theme: {
		// Tailwind's breakpoints but minus 20px so it's the same with or without
		// scrollbar
		screens: {
			sm: "620px",
			md: "748px",
			lg: "1004px",
			xl: "1260px",
			"2xl": "1516px",
		},
		extend: {
			fontFamily: {
				sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
				mono: ["'iA Writer Mono'", ...defaultTheme.fontFamily.mono],
			},
			typography: typography,
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
	],
};
