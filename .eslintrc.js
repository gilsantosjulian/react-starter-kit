module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  plugins: [],
  parser:  '@typescript-eslint/parser',
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
    'no-plusplus': 'off', // enable plusplus e.g. let a = 1; a++;
    'no-await-in-loop': 'off', // enable await for using it inside a loop
    'function-paren-newline': ['error', { minItems: 1 }], // add new line in functions that has one argument or more
    'import/prefer-default-export': 'off', // export default not mandatory
    '@typescript-eslint/explicit-function-return-type': 'error', // you have to specify the return type
    '@typescript-eslint/indent': ['error', 2], // indentation
    'react/prop-types': 'off', // disable verification of prop types because we are using typescript interfaces instead of prop types
    'array-bracket-spacing': ['error', 'always'], // to put sapaces at the begining and the end of array
  },
};