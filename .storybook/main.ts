const storybookPath = '/storybook/'

module.exports = {
  stories: ['../src/**/*.story.tsx'],
  framework: "@storybook/react",
  features: { storyStoreV7: true },
  addons: [
    '@storybook/addon-essentials',
    '@chakra-ui/storybook-addon'
  ],
  typescript: {
      check: false
  },
  core: {
    builder: "@storybook/builder-vite"
  },
  refs: {
      '@chakra-ui/react': {
        disable: true,
      },
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = storybookPath
    }
    return config
  },
  webpackFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.output.publicPath = storybookPath
    }
    return config;
  },
  managerWebpack: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.output.publicPath = storybookPath
    }
    return config;
  },
}