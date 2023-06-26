import { test, expect } from '@playwright/test';

const host = 'http://localhost:3000';

test('Page loaded', async ({ page }) => {
  await page.goto(`${host}/blog`);
  await expect(page).toHaveTitle(/Coder in Austria | Blog/);
});
  
test('Page rendered', async ({ page }) => {
  await page.goto(host);
});
  