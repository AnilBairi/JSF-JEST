import type { Config } from '@jest/types'
const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  rootDir: './',
  testMatch: ['<rootDir>/**/*.test.ts'],
  clearMocks: true,
  globals: {
    window: {
      location: {},
    },
  },
  preset: 'ts-jest',
}

export default config
