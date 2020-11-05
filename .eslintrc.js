module.exports = {
  extends: ['standard'],
  env: {
    'commonjs': true,
    'node': true,
    'mocha': true
  },
  plugins: [],
  rules: {
    'max-len': 'off',
    'no-console': 'error',
    'no-alert': 'error',
    'no-debugger': 'error',
    'object-curly-spacing': [1, 'always'],
    'lines-between-class-members': ['error', 'always'],
    'semi': [2, 'always'],
    'space-before-function-paren': 0,
    'quote-props': ['error', 'as-needed'],
    'no-unused-expressions': 'off',
  },
};