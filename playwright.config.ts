import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  timeout: 30000,
  snapshotDir: './snapshots',
  reporter: [['html', { outputFolder: 'html-report' }]],  // HTML reports
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'https://www.earnin.com/',
    screenshot: 'off',
  },
  expect: {
    toMatchSnapshot: {
      threshold: 1,
    },
  },

  projects: [
    {
      name: 'Safari Mobile',
      use: {
        ...devices['iPhone 12 Pro'],
      },
    },
    {
      name: 'Chrome Desktop',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
};
export default config;
