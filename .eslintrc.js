module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended', // ESLintのJavaScriptルールセットを適用
    'plugin:@typescript-eslint/eslint-recommended', // eslint:recommendedに含まれるルールを型チェックでカバーできるものは無効化
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // 型チェックが必要なルールを適用
    'plugin:prettier/recommended', // Prettierのお勧めルールセットを適用
    'prettier', // Prettierでカバーできるルールを無効化
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json', // tsconfig.jsonの場所を指定
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
