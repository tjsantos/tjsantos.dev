import baseConfig from '../prettier.config.ts'
import type { Config } from 'prettier'

const config: Config = {
  ...baseConfig,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles.css',
}

export default config
