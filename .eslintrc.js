/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true
	},
	settings: {
		react: {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			version: require("react/package.json").version
		}
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier"
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["react", "@typescript-eslint"]
};
