// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'
import pluginRouter from '@tanstack/eslint-plugin-router'
import baseConfig from '../eslint.config.js'

export default [
  ...baseConfig,
  ...pluginRouter.configs['flat/recommended'],
  ...storybook.configs['flat/recommended'],
  { ignores: ['**/*.gen.ts'] },
]
