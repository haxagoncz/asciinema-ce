const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')
const esbuild = require('rollup-plugin-esbuild').default
const css = require('rollup-plugin-import-css')
const dts = require('rollup-plugin-dts').default

const banner = `/*!
 * asciinema-player-ce
 * Copyright (c) 2022-${new Date().getFullYear()} HAXAGON
 */`

module.exports = [{
  input: 'src/main.ts',
  output: {
    format: 'iife',
    name: 'asciinemaPlayerCE',
    file: 'lib/asciinema-player.iife.js',
    banner,
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    esbuild(),
    css(),
  ],
},
{
  input: 'src/main.ts',
  output: {
    format: 'dts',
    file: 'lib/asciinema-player.d.ts',
    banner,
  },
  plugins: [
    dts({
      compilerOptions: {
        stripInternal: true,
      },
    }),
  ],
}]
