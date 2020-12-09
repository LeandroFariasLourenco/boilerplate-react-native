module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-unused-vars': 'warn',
    semi: ['warn', 'always'],
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [0],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-console': 'off',
    'linebreak-style': 'off',
    indent: ['error', 2],
  },
};
