import type { Config } from 'prettier'

const config: Config = {
  semi: false,
  singleQuote: true,
  overrides: [{ files: ['*.jsonc'], options: { trailingComma: 'none' } }],
}

export default config
