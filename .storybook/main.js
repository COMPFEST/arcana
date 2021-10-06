const fs = require('fs');
const path = require('path');

function getPackageDir(filepath) {
    let currDir = path.dirname(require.resolve(filepath));
    while (true) {
        if (fs.existsSync(path.join(currDir, 'package.json'))) {
            return currDir;
        }
        const { dir, root } = path.parse(currDir);
        if (dir === root) {
            throw new Error(`Could not find package.json in the parent directories starting from ${filepath}.`);
        }
        currDir = dir;
    }
}

module.exports = {
  stories: ['../src/stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async (config) => {
      return {
      ...config,
      resolve: {
      ...config.resolve,
      alias: {
      ...config.resolve.alias,
      "@emotion/core": getPackageDir("@emotion/react"),
      // You should add this row
      "@emotion/styled": getPackageDir("@emotion/styled"),
      "emotion-theming": getPackageDir("@emotion/react"),
      },
      },
    }
  }
};
