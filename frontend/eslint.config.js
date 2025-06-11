import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  ...tanstackConfig,
  // global ignores
  { ignores: ['**/*.gen.ts'] },
]
