module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "react-hooks", "jest"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "prettier"
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
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["**/testUtils/*.tsx"],
  rules: {
    // REACT
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": "off",
    // the next two ignore errors about React not being imported
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",

    // JEST
    // not always needed with @testing-libary/react
    // multiple examples of this by library author (https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#using-waitfor-to-wait-for-elements-that-can-be-queried-with-find)
    "jest/expect-expect": "off",
  },
};
