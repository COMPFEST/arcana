const postcss = require("rollup-plugin-postcss")
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('rollup-plugin-node-resolve');

// tsdx.config.js
let static_files = require('rollup-plugin-static-files');

const twindConfig = {
  extensions: ['.ts', '.tsx'],
};

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      peerDepsExternal(),
      resolve({ extensions: twindConfig.extensions }),
      commonjs(),
      babel({
        extensions: twindConfig.extensions,
        include: ['src/**/*'],
        exclude: 'node_modules/**',
      }),
      static_files({
        include: ['./static'],
      }),
      postcss({
        inject: true,
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};
