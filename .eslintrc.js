module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        format: [
          'camelCase',
          'snake_case',
          'PascalCase',
        ],
      },
    ],
    'linebreak-style': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
        ],
      },
    ],
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
        ],
      },
    ],
    'no-unused-vars': 'error',
    'spaced-comment': [
      2,
      'always',
    ],
    'react/jsx-props-no-spreading': 0,
    'no-underscore-dangle': 0,
    'react/no-array-index-key': 0,
    'react/display-name': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'i18next/no-literal-string': 'off',
    'import/no-cycle': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: [
        '**/src/**/*.test.{ts,tsx}',
      ],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
