module.exports = {
  files: ['src/languages/*.js'],
    rules: {
      'no-unused-expressions': 'off',
      'camelcase': 'off',
      'no-unused-vars': 'error',
      'no-control-regex': 'off',
      'no-useless-escape': 'off',
      'comma-dangle': 'off',
      'array-bracket-spacing': ['error', 'always'],
      'array-bracket-newline': ['warn', { multiline: true, minItems: 2 }],
      'array-element-newline': 'warn',
      'object-curly-newline': ['warn', { minProperties: 2 }],
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }]
    }
};
