module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    // '@nuxtjs',
    // 'prettier',
    // 'prettier/vue',
    // 'plugin:prettier/recommended',
    // 'plugin:nuxt/recommended',
    'google',
    'plugin:vue/strongly-recommended',
  ],
  plugins: [
    // 'prettier'
    'vue',
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'complexity': ['error', 15],
    'linebreak-style': 0,
  },
};
