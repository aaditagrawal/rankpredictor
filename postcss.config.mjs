import babelConfig from "./babel.config.js";
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    "@stylexjs/postcss-plugin": {
      include: ["app/**/*.stylex.js"],
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: babelConfig.plugins,
      },
      useCSSLayers: false,
    },
  },
};
