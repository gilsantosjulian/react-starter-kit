module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: ['airbnb'],
  plugins: [],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'import/no-unresolved': 'off', // is to resolve imports
    'react/jsx-filename-extension': ['error', {
      extensions: ['.tsx']
    }], // allow .tsx extension
    'react/jsx-one-expression-per-line': 'off', // disable put jsx expressions in a new line, 
    'react/prefer-stateless-function': 1, // Only use function components 'Warning'
    'no-console': 'off', // Don't use console.log() 'Warning'
    'no-alert': 1, // Don't use alert()'Warning'
    'space-before-function-paren': 0, // space between functions
    'max-len': ['error', 90, 2, {
      ignoreUrls: true,
    }], // max lenght is of 90
    'padded-blocks': 'off', // turn off padding between block and first line of code, ej between block class and first line after
    'class-methods-use-this': 'off', // is useful when we call methods on class components
    'comma-dangle': ['error', 'always'], // use always trailing comas
    'no-trailing-spaces': 'off', // allow trailing spaces
    'no-plusplus': 'off',
    'no-await-in-loop': 'off',
  },
};