import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
	globalCss: {
		body: {
			backgroundColor: "bg",
			color: "text",
		},
		"*:focus, *:focus-visible, *:focus-within": {
			outline: "none !important",
			boxShadow: "none !important",
		},
	},
	theme: {
		tokens: {
			fonts: {
				header: { value: "var(--font-rock-attack), serif" },
				body: { value: "var(--font-puritan), sans-serif" },
				heading: { value: "var(--font-pp-hatton), serif" },
				cursive: { value: "var(--font-loved-by-the-king), cursive" },
			},
			colors: {
				primary: { value: "#56612E" },
				secondary: { value: "#8F9E25" },
				accent: { value: "#F2A1A1" },
				background: { value: "#E2DECD" },
				text: { value: "#22509B" },
			},
		},
		semanticTokens: {
			colors: {
				bg: {
					DEFAULT: { value: "{colors.background}" },
				},
				fg: {
					DEFAULT: { value: "{colors.text}" },
				},
				primary: {
					solid: { value: "{colors.primary}" },
					contrast: { value: "#fff" },
				},
				accent: {
					solid: { value: "{colors.accent}" },
					contrast: { value: "#fff" },
				},
			},
		},
		recipes: {
			button: {
				base: {
					colorPalette: "primary",
				},
			},
		},
	},
});

export const system = createSystem(defaultConfig, config);
