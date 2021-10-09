module.exports = {
  env: {
    browser: true,
    node: true
  },
  // parcerOptions: {
  //   parcer:'babel-eslint',
  //   sorceType:'module'
  // },
  extends: [
    '@tabianco/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  root: true,
  rules: {}
}
