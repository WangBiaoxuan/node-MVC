module.exports = {
    "extends": "eslint:recommended",
    "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "commonjs": true,
    },
    "rules": {
      "no-var": [2],
      "spaced-comment": [0],
      "no-unused-vars": [1],
      "no-empty": [0],
      "no-constant-condition": [0],
      "arrow-body-style": [0],
      "semi": [0],
      "global-require": [0],
      "no-shadow": [0],
      "no-useless-computed-key": [0],
      "no-underscore-dangle": [0],
      "no-tabs": "off",
      "import/no-unresolved": [2, {commonjs: true, amd: true}],
  },

};