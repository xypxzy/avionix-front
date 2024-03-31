import type { Config } from 'tailwindcss'
// @ts-ignore
// eslint-disable-next-line import/no-named-default
import {default as flattenColorPalette} from "tailwindcss/lib/util/flattenColorPalette";

// eslint-disable-next-line no-unused-vars
require("tailwindcss/defaultTheme");
// eslint-disable-next-line no-unused-vars
require("tailwindcss/colors");


const config = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1600px',
			},
		},
		extend: {
			colors: {
				background_hero: 'var(--background-hero)',
				success: 'var(--success)',

				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				dark_blue: 'var(--background-dark-blue)',
				light_blue: 'var(--background-light-blue)',
				pagination: 'var(--background-pagination)',
				gold: 'var(--background-gold)',
				silver: 'var(--background-silver)',
				bronze: 'var(--background-bronze)',
				light_sky: 'var(--bells-color)',
				gray_custom: 'var(--gray-background)',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
			fontSize: {
				caption: ['12px', '18px'], // captions
				xs: ['14px', '22px'], // b3 body
				sm: ['16px', '24px'], // b2 body
				base: ['20px', '30px'], // b1 body
				lg: ['24px', '36px'], // title
				xl: ['32px', '48px'], // h3 headline
				'2xl': ['48px', '72px'], // h2 headline
				'3xl': ['64px', '96px'], // h1 headline
			},
		},
	},
	plugins: [require('tailwindcss-animate'), addVariablesForColors],
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
	const allColors = flattenColorPalette(theme("colors"));
	const newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

export default config
