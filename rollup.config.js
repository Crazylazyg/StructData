import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import preprocess from 'svelte-preprocess';
import postcss from 'rollup-plugin-postcss'
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import zip from 'rollup-plugin-zip'

import {
	chromeExtension,
	simpleReloader,
} from 'rollup-plugin-chrome-extension'
import { emptyDir } from "rollup-plugin-empty-dir";

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default [
	// {
	// 	input: 'src/main.js',
	// 	output: {
	// 		sourcemap: true,
	// 		format: 'iife',
	// 		name: 'app',
	// 		file: 'public/build/bundle.js'
	// 	},
	// 	plugins: [
	// 		// copy({
	// 		// 	targets: [
	// 		// 		{ src: 'extension/**/*', dest: 'public' },]
	// 		// }),

	// 		svelte({
	// 			preprocess: preprocess(),
	// 			compilerOptions: {
	// 				// enable run-time checks when not in production
	// 				dev: !production
	// 			}
	// 		}),
	// 		// we'll extract any component CSS out into
	// 		// a separate file - better for performance
	// 		postcss({ minimize: production }),

	// 		// If you have external dependencies installed from
	// 		// npm, you'll most likely need these plugins. In
	// 		// some cases you'll need additional configuration -
	// 		// consult the documentation for details:
	// 		// https://github.com/rollup/plugins/tree/master/packages/commonjs
	// 		resolve({
	// 			browser: true,
	// 			dedupe: ['svelte']
	// 		}),
	// 		commonjs(),

	// 		// In dev mode, call `npm run start` once
	// 		// the bundle has been generated
	// 		!production && serve(),

	// 		// Watch the `public` directory and refresh the
	// 		// browser on changes when not in production
	// 		!production && livereload('public'),

	// 		// If we're building for production (npm run build
	// 		// instead of npm run dev), minify
	// 		production && terser()
	// 	],
	// 	watch: {
	// 		clearScreen: false
	// 	}
	// },
	// {
	// 	input: "src/global.scss",
	// 	output: {
	// 		file: "src/global"
	// 	},
	// 	plugins: [postcss({ minimize: production })]
	// },
	{
		input: 'src/manifest.json',
		output: {
			dir: 'public',
			format: 'esm',
			plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]

		},
		plugins: [
			// always put chromeExtension() before other plugins
			chromeExtension({ browserPolyfill: true }),
			simpleReloader(),
			// the plugins below are optional
			svelte({
				preprocess: preprocess(),
				compilerOptions: {
					// enable run-time checks when not in production
					dev: !production
				}
			}),
			// we'll extract any component CSS out into
			// a separate file - better for performance
			postcss({ minimize: production }),

			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration -
			// consult the documentation for details:
			// https://github.com/rollup/plugins/tree/master/packages/commonjs
			resolve({
				dedupe: ['svelte']
			}),
			commonjs(),
			emptyDir(),
			production && terser(),
			production && zip({ dir: "releases" }),
		],
	},

]
