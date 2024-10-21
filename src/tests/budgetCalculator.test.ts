import { test, expect } from "@playwright/test";
import { FinancialCalculatorsPage } from "../pages/financialCalculators.page";
import { BudgetCalculatorPage } from "../pages/budgetCalculator.page";
import { ScreenshotUtility } from "../utils/screenshotUtil";
import { interceptSegmentRequests } from "../utils/interceptors";

test("Verify Budget calculator page visual", async ({ page, context }) => {
  const financialCalculatorsPage = new FinancialCalculatorsPage(page, context);
  await financialCalculatorsPage.navigateTo("/financial-calculators");
  await financialCalculatorsPage.acceptCookies()
  expect(await financialCalculatorsPage.isOnFinancialCalculatorPage()).toBe(
    true
  );

  const budgetWindow = await financialCalculatorsPage.selectBudgetCalculator();
  const budgetCalculatorPage = new BudgetCalculatorPage(budgetWindow);

  expect(await budgetCalculatorPage.isOnBudgetCalculatorPage()).toBe(true);

  // verify visual
  const screenshotUtility = new ScreenshotUtility(budgetWindow);
  await screenshotUtility.compareWithBaseline("BUDGET_CALCULATOR_PAGE");
});

test("Verify analytics visit event for Budget calculator page", async ({ page, context }) => {
  const financialCalculatorsPage = new FinancialCalculatorsPage(page, context);
  await financialCalculatorsPage.navigateTo("/financial-calculators");
  await financialCalculatorsPage.acceptCookies()
  expect(await financialCalculatorsPage.isOnFinancialCalculatorPage()).toBe(
    true
  );

  // verify analytics event
  await interceptSegmentRequests(page, "Budget Calculator");

  const budgetWindow = await financialCalculatorsPage.selectBudgetCalculator();
  const budgetCalculatorPage = new BudgetCalculatorPage(budgetWindow);

  expect(await budgetCalculatorPage.isOnBudgetCalculatorPage()).toBe(true);
});
