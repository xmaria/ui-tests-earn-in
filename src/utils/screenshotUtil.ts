import { Page, BrowserContext, expect, test } from '@playwright/test';
import { SnapshotNames } from './snapshotNames';
import * as fs from 'fs';
import * as path from 'path';

export class ScreenshotUtility {
  private page: Page;
//   private snapshotBaseDir = 'snapshots'
//   private snapshotDir
//   private screenshotBaseDir = 'screenshots'
//   private screenshotDir
//   private deviceName: string;


  constructor(page: Page) {
    this.page = page
    // // get project name and use as deviceName
    // this.deviceName = test.info().project.name;

    // // create screenshot subdir if not exists
    // this.screenshotDir = path.resolve(`${this.screenshotBaseDir}/${this.deviceName}`);
    // this.ensureDirectoryExists(this.screenshotDir);

    // // create snapshots subdir if not exists
    // this.snapshotDir = path.resolve(`${this.snapshotBaseDir}/${this.deviceName}`);
    // this.ensureDirectoryExists(this.snapshotDir);
  }

//   // Helper function to check if a file exists
//   private doesFileExist(filePath: string): boolean {
//     return fs.existsSync(filePath);
//   }

  // Helper function to create screenshots directory if it doesn't exist
//   private ensureDirectoryExists(dirPath: string) {
//     if (!fs.existsSync(dirPath)) {
//       fs.mkdirSync(dirPath, { recursive: true });
//       console.log(`Created directory: ${dirPath}`);
//     }
//   }

  // Capture a screenshot and save it to a specified path
//   async captureScreenshot(nameKey: keyof typeof SnapshotNames, isBaseline: boolean) {
//     const snapshotName = SnapshotNames[nameKey];
//     const screenshotPath = path.join(this.screenshotDir, `${snapshotName}.png`);
//     const baselinePath = path.join(this.snapshotDir, `${snapshotName}_baseline.png`);
//     var filePath: string;
    
//     (isBaseline == true) ? filePath = baselinePath : filePath = screenshotPath;
    
//     await this.page.screenshot({ path: filePath, fullPage: true });
//     console.log(`Captured screenshot and saved as: ${filePath}`);
//   }

  // Compare a screenshot against a baseline
  async compareWithBaseline(nameKey: keyof typeof SnapshotNames) {
    const snapshotName = SnapshotNames[nameKey];
    // const screenshotPath = path.join(this.screenshotDir, `${snapshotName}.png`);
    // const baselinePath = path.join(this.snapshotDir, `${snapshotName}_baseline.png`);

    // // Check if the baseline exists
    // if (!this.doesFileExist(baselinePath)) {
    //   // If baseline doesn't exist, capture the current screenshot as the baseline
    //   console.log(`Baseline image not found for ${snapshotName}. Capturing a new baseline.`);
    //   await this.captureScreenshot(nameKey, true);
    // } else {
      // If baseline exists, compare the current screenshot with the baseline
    //   console.log(`Baseline image found ${baselinePath}. Comparing..`);
      expect(await this.page.screenshot({ fullPage: true })).toMatchSnapshot(`${snapshotName}.png`);
    //}
  }
}