module.exports = {
  "extends": "connesc/node-es5",
  "parserOptions": {
    "ecmaVersion": 6
  },
  "env": {
    "es6": true
  },
  "rules": {
    // ECMAScript 6
    "arrow-body-style": "error",
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "generator-star-spacing": ["error", "after"],
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "no-duplicate-imports": "error",
    "no-restricted-imports": "off",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-reflect": "off",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "off",
    "require-yield": "off",
    "rest-spread-spacing": "error",
    "sort-imports": "off",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error"
  }
}
