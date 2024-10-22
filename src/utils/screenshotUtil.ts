import { Page, expect } from '@playwright/test';
import { SnapshotNames } from './snapshotNames';

export class ScreenshotUtility {
  private page: Page;

  constructor(page: Page) {
    this.page = page
  }

  // Compare a screenshot against a baseline
  async compareWithBaseline(nameKey: keyof typeof SnapshotNames) {
    const snapshotName = SnapshotNames[nameKey];
      expect(await this.page.screenshot({ fullPage: true })).toMatchSnapshot(`${snapshotName}.png`);
  }
}