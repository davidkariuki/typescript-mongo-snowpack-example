// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // mount: {},
  plugins: [
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-dotenv",
    "@snowpack/web-test-runner-plugin",
  ],
  // installOptions: {},
  // devOptions: {},
  // buildOptions: {},
}
