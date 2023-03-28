module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier', 'import'],
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'no-mixed-spaces-and-tabs': 0,
    'no-sequences': [0, 'SequenceExpression'],
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true,
      },
    ],
  },
};
