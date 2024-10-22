import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // navigate to a URL
  async navigateTo(path: string) {
    const baseURL = process.env.BASE_URL || ''; // Defaulting to an empty string if baseURL isn't provided
    await this.page.goto(`${baseURL}${path}`, { waitUntil: 'load' });
  }

  // wait for an element to be visible
  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector);
  }
}