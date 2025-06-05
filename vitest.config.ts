import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        storybookScript: 'pnpm run storybook --ci',
        tags: {
          include: ['test'],
          exclude: ['todo', 'wip'],
          skip: ['skip'],
        },
      }),
    ],
    optimizeDeps: {
      entries: ['react/jsx-dev-runtime', 'react-dom/client'],
    },
    test: {
      projects: [
        {
          test: {
            name: 'unit',
            include: ['**/*.spec.{ts,tsx}']
          },
        },
        {
          test: {
            name: 'e2e',
            include: ['**/*.e2e.{ts,tsx}'],
            browser: {
              enabled: true,
              headless: true,
              provider: 'playwright',
              instances: [{ browser: 'chromium' }],
            },
          },
        },
        {
          test: {
            name: 'storybook',
            browser: {
              enabled: true,
              headless: true,
              provider: 'playwright',
              instances: [{ browser: 'chromium' }],
            },
          },
        },
      ],
    },
  })
)
