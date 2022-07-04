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
  refs: {
      '@chakra-ui/react': {
        disable: true,
      },
  }
}