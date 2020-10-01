// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'EricHier',
  titleTemplate: "%s",
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: 'tailwind.config.js',
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: true,
        shouldTimeTravel: false
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [
          'de-de',
          'en-gb'
        ],
        pathAliases: {
          'de-de': 'de',
          'en-gb': 'en'
        },
        fallbackLocale: 'en-gb',
        defaultLocale: 'de-de',
        enablePathRewrite: true,
        rewriteDefaultLanguage: false,
        messages: {
          'de-de': require('./src/locales/de-de.js'),
          'en-gb': require('./src/locales/en-gb.js'),
        }
      }
    }
  ]
};
