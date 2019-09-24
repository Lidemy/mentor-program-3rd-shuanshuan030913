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
    "no-inner-declarations": "off",
    "padded-blocks": "off",
    "linebreak-style": "off",
    "no-underscore-dangle": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/destructuring-assignment": "off",
    "react/prop-types": 0,
    "no-useless-constructor": "off",
    "react/no-access-state-in-setstate": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "react/no-array-index-key": "off",
    "object-curly-newline": "off",
    "react/jsx-one-expression-per-line": "off",
    "jsx-a11y/anchor-is-valid":"off",
    "react/no-children-prop": "off",
    "import/prefer-default-export": "off",
    "react/jsx-boolean-value": "off",
  },
};
