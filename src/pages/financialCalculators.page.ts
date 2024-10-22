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
    try {
      const button = await this.page.waitForSelector(this.acceptCookiesBtn);
      
      if (button) {
        await button.click();
        console.log('Cookies accepted');
      }
    } catch (error) {
      // Handle case where the button does not appear
      console.log('Cookies preference did not appear within the timeout');
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