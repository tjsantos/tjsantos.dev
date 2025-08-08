// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'
import { tanstackConfig } from '@tanstack/eslint-config'
import pluginRouter from '@tanstack/eslint-plugin-router'

export default [
  ...tanstackConfig,
  ...pluginRouter.configs['flat/recommended'],
  ...storybook.configs['flat/recommended'],
  { ignores: ['**/*.gen.ts'] },
]
