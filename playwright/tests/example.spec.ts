import { test, expect } from '@playwright/test';

test('opening_portfolio', async ({ page }) => {
  await page.goto('https://jojokitten.github.io/PORTFOLIO_WEBSITE_67/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/my_portfolio/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://jojokitten.github.io/PORTFOLIO_WEBSITE_67/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
