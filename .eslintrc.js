module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "prettier",
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-console": 1, // warning
    "no-unused-vars": 1, // warning
    "react/prop-types": 0,
    "prettier/prettier": ["error", {
      "printWidth": 120,
      "bracketSpacing": false,
      "singleQuote": true,
      "jsxSingleQuote": true,
    }],
  },
};
