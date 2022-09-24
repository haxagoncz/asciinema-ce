import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess';
import postcssImport from 'postcss-import'

const production = !process.env.ROLLUP_WATCH

const banner = `/*!
 * asciinema-player-ce
 * Copyright (c) 2022 HAXAGON
 */`

export default {
	input: 'src/main.ts',
	output: {
		format: 'iife',
		name: 'asciinema',
		file: 'lib/asciinema-player.iife.js',
		banner,
	},
	plugins: [
		svelte({
			preprocess: [
				sveltePreprocess({
				  postcss: {
					plugins: [postcssImport],
				  },
				}),
		],
			compilerOptions: {
				dev: !production,
				customElement: true,
			}
		}),

		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
    typescript({
      sourceMap: false
    }),
    terser(),
	]
};
