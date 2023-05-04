import { test, expect } from '@playwright/test';

const host = 'http://localhost:3000'

test('Page loaded', async ({ page }) => {
    await page.goto(`${host}/blog/efficient-string-concatenation-in-python-recomended`);
    await expect(page).toHaveTitle(/Coder in Austria | Efficient String Concatenation in Python (recomended)/);
  });
  
  test('Page rendered', async ({ page }) => {
    await page.goto(`${host}/blog/efficient-string-concatenation-in-python-recomended`);
    await expect(page.getByRole('heading', { name: 'Efficient String Concatenation in Python (recomended)' })).toBeVisible();
    await expect(page.locator('xpath=/html/body/div/div[1]/div[2]')).toHaveText('2 May, 2023');
  });
  