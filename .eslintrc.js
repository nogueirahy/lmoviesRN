module.exports = {
  parser: "babel-eslint",
  env: {
    jest: true
  },
  extends: ["airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "global-require": "off",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "import/named": "off",
    "no-return-assign": "off",
    "no-underscore-dangle": "off",
  },
  globals: {
    fetch: false,
    XMLHttpRequest: false
  }
};
