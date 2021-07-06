module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    semi: 'off', // must disable base rule to enable typescript version
    '@typescript-eslint/semi': ['warn'],
    'no-unused-vars': 'off', // must disable base rule to enable typescript version
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        args: 'after-used',
      },
    ],
    'no-undef': 'off', // ignores for js config files
    'no-multiple-empty-lines': [
      1,
      {
        max: 1,
        maxBOF: 0,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'max-len': ['warn', { code: 140 }],
    'no-console': 'error',
    'ordered-imports': 'off',
    quotes: ['error', 'single'],
    'sort-keys': 'off',
  },
};
