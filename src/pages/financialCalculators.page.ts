import { BrowserContext } from '@playwright/test';
import { BasePage } from './basePage';

export class FinancialCalculatorsPage extends BasePage {

  private context: BrowserContext;
  private acceptCookiesBtn = '#onetrust-accept-btn-handler';
  private finantialCalculatorsSection = 'section[data-testid="financial-calculator-section"]';
  private budgetCalculatorCard = 'div[data-testid="financial-calculator-Budget calculator-card"]';

  constructor(page, context: BrowserContext) {
    super(page);
    this.context = context;
  }

  async isOnFinancialCalculatorPage() {
    return await this.page.isVisible(this.finantialCalculatorsSection);
  }

  async navigateToFinancialCalculators(){
    await this.navigateTo("/financial-calculators");
    await this.acceptCookies()
  }

  async acceptCookies(){
    if (await this.page.isVisible(this.acceptCookiesBtn)) {
      this.page.locator(this.acceptCookiesBtn).click();
    }
  }

  async selectBudgetCalculator() {
    // Wait for the new page (tab) to open
    const [newPage] = await Promise.all([
      this.context.waitForEvent('page'),
      this.page.locator(this.budgetCalculatorCard).click()
    ]);
    return newPage;
  }
}