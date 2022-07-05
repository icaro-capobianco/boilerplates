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
    builder: "storybook-builder-vite"
  },
  refs: {
      '@chakra-ui/react': {
        disable: true,
      },
  }
}