module.exports = {
  plugins: ['lodash'],
  extends: ['standard-with-typescript', 'plugin:lodash/canonical'],
  parserOptions: {
    project: './tsconfig.json'
  }
}
