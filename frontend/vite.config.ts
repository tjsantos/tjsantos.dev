import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})

// TODO:
//  DEPRECATED  The workspace file is deprecated and will be removed in the next major. Please, use the `test.projects` field in vite.config.ts instead.

// import path from 'node:path'
// import { fileURLToPath } from 'node:url'
//
// import { defineWorkspace } from 'vitest/config'
//
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
//
// const dirname =
//   typeof __dirname !== 'undefined'
//     ? __dirname
//     : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
// export default defineWorkspace([
//   'vite.config.js',
//   {
//     extends: 'vite.config.js',
//     plugins: [
//       // The plugin will run tests for the stories defined in your Storybook config
//       // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
//       storybookTest({ configDir: path.join(dirname, '.storybook') }),
//     ],
//     test: {
//       name: 'storybook',
//       browser: {
//         enabled: true,
//         headless: true,
//         provider: 'playwright',
//         instances: [{ browser: 'chromium' }],
//       },
//       setupFiles: ['.storybook/vitest.setup.ts'],
//     },
//   },
// ])
