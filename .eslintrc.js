module.exports = {
  env: {
    browser: true,
    node: true
  },
  parcerOptions: {
    parcer:'babel-eslint',
    sorceType:'module'
  },
  extends: [
    '@tabianco/eslint-config-typescript'
  ],
  plugins: [
  ],
  root: true,
  // add your custom rules here
  rules: {}
}
