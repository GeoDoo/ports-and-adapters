exports.config = {
  output: './src/functional-output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000',
      show: false,
      waitForNavigation: 'networkidle0'
    }
  },
  include: {},
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './src/functional/features/*.feature',
    steps: ['./src/functional/step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  name: 'ports-and-adapters'
}