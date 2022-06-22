module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // dev warn
    'no-empty': 'warn',
    'no-empty-function': 'warn',
    'no-unreachable': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-vars': 'warn',
    'object-curly-newline': 'warn',


    // final
    'arrow-parens': 'off',
    'no-nested-ternary': 'off',
    camelcase: 'warn',
    'consistent-return': 'warn',
    eqeqeq: 'warn',
    'global-require': 'warn',
    'no-new': 'warn',
    'no-empty-pattern': 'warn',
    'no-param-reassign': 'warn',
    'no-promise-executor-return': 'warn',
    'no-return-assign': 'warn',
    // 'no-useless-escape': 'warn',

    // basic
    'max-len': ['warn', { code: 160, tabWidth: 4 }],
    'no-multiple-empty-lines': ['error', { max: 3 }],


    /* VUE */

    // dev warn
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn',

    // final
    'import/prefer-default-export': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/require-v-for-key': 'off',
    'vue/valid-v-for': 'off',

    'vuejs-accessibility/anchor-has-content': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vuejs-accessibility/alt-text': 'off',
  },
};

