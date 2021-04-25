const postcss = require('rollup-plugin-postcss');
const babel = require('rollup-plugin-babel');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('rollup-plugin-node-resolve');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      })
    );
    // config.plugin.push(
    //   babel({
    //     extensions: config.extensions,
    //     include: []
    //   })
    // )
    return config;
  },
};
