
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    '@vospel',
  ],
  rules: { '@typescript-eslint/no-for-in-array': ['off'] },
  ignorePatterns: ['lib'],
}
