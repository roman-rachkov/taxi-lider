const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
		"./storage/framework/views/*.php",
		"./resources/views/**/*.blade.php",
		"./resources/js/**/*.jsx",
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ["Figtree", ...defaultTheme.fontFamily.sans],
			},
		},
	},

	plugins: [
		require("@tailwindcss/forms"),
		plugin(({addBase, theme}) => {
			addBase({
				'h1': {fontSize: theme("fontSize.3xl"), fontWeight: 'bold'},
				'h2': {fontSize: theme("fontSize.2xl"), fontWeight: 'bold'},
				'h3': {fontSize: theme("fontSize.xl"), fontWeight: 'bold'},
				'h4': {fontSize: theme("fontSize.lg"), fontWeight: 'bold'},
				'h5': {fontSize: theme("fontSize.base"), fontWeight: 'bold'},
				'h6': {fontSize: theme("fontSize.sm"), fontWeight: 'bold'},
			});
		}),
	],
};
