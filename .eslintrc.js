/* eslint-disable */
const path = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "react-hooks"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      webpack: {
        config: {
          resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
          },
        },
      },
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
  },
};
