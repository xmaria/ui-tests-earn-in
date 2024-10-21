import { BasePage } from './basePage';
import { Page, BrowserContext } from '@playwright/test';


export class BudgetCalculatorPage extends BasePage {
  private budgetCalculatorHeader = 'h1:has-text("Budget calculator")';

  constructor(page: Page) {
    super(page);
  }

  async isOnBudgetCalculatorPage() {
    return await this.page.isVisible(this.budgetCalculatorHeader);
  }
}