module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "linebreak-style": "off",
    quotes: "off",
    semi: "off",
    "comma-dangle": "off",
    "react/function-component-definition": "off",
    "arrow-body-style": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "implicit-arrow-linebreak": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-confusing-arrow": "off",
    indent: "off",
    "no-nested-ternary": "off",
  },
};
