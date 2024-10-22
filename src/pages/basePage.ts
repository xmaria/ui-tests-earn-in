import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Common method to navigate to a URL
  async navigateTo(path: string) {
    const baseURL = process.env.BASE_URL || ''; // Defaulting to an empty string if baseURL isn't provided
    await this.page.goto(`${baseURL}${path}`, { waitUntil: 'load' });
  }

  // Common method to wait for an element to be visible
  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector);
  }
}