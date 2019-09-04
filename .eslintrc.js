module.exports = {

  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true,
    jest: true
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console": "off",
    "no-tabs":"off",
    "no-plusplus": "off",
    "no-trailing-spaces": [2, { "skipBlankLines": true }],
    "padded-blocks": "off",
    "linebreak-style": "off",
    "no-underscore-dangle": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/destructuring-assignment": "off",
    "react/prop-types": 0,
    "no-useless-constructor": "off",
    "react/no-access-state-in-setstate": "off",
  },
};
