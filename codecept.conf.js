exports.config = {
  tests: './src/functional/*.acceptance.test.js',
  output: './src/functional-output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000',
      show: true,
      waitForNavigation: "networkidle0"
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'ports-and-adapters'
}