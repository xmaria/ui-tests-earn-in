import { test, expect } from '@playwright/test';
import { FinancialCalculatorsPage } from '../pages/financialCalculators.page';
import { BudgetCalculatorPage } from '../pages/budgetCalculator.page';
import { ScreenshotUtility } from '../utils/screenshotUtil';

test('Budget Calculator flow and visual comparison', async ({ page, context }) => {
  const financialCalculatorsPage = new FinancialCalculatorsPage(page, context);

  await financialCalculatorsPage.navigateTo('/financial-calculators');

  expect(await financialCalculatorsPage.isOnFinancialCalculatorPage()).toBe(true);

  const budgetWindow = await financialCalculatorsPage.selectBudgetCalculator();

  const budgetCalculatorPage = new BudgetCalculatorPage(budgetWindow);

  expect(await budgetCalculatorPage.isOnBudgetCalculatorPage()).toBe(true);

  // Step 5: Initialize Screenshot Utility for the new page
  const screenshotUtility = new ScreenshotUtility(budgetWindow);

  // Step 7: Compare future screenshots against the baseline using mapped name
  await screenshotUtility.compareWithBaseline('BUDGET_CALCULATOR_PAGE');

});
