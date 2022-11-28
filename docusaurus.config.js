// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Connect Developer",
	tagline: "Connect Developer Hub",
	url: "https://connect-org.github.io",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "images/icon-dark.png",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "connect-org", // Usually your GitHub org/user name.
	projectName: "developers", // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"]
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl:
						"https://github.com/connect-org/developers/tree/main/"
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css")
				}
			})
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Connect Developers",
				logo: {
					alt: "Connect Developers Icon",
					src: "images/icon-light.png",
					srcDark: "images/icon-dark.png"
				},
				items: [
					{
						href: "https://github.com/connect-org/developers",
						label: "GitHub",
						position: "right"
					},
					{
						type: "doc",
						docId: "Getting Started/index",
						label: "Getting Started",
						position: "left"
					},
					{
						type: "doc",
						docId: "API Reference/index",
						label: "API Reference",
						position: "left"
					},
					{
						href: "/docs",
						label: "Docs",
						position: "left"
					}
				]
			},
			footer: {
				links: [
					{
						items: [
							{
								label: "GitHub",
								href: "https://github.com/connect-org/"
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} Connect`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			},
			colorMode: {
				respectPrefersColorScheme: true
				// disableSwitch: true
			}
		})
};

module.exports = config;
