import { test, expect } from '@playwright/test';

const host = 'http://localhost:3000'

test('Page loaded', async ({ page }) => {
    await page.goto(`${host}/courses/basic-informatics-and-computer-science`);
    await expect(page).toHaveTitle(/Coder in Austris | Courses | Basic informatics and computer science/);
  });
  
  test('Page rendered', async ({ page }) => {
    await page.goto(host);
  });
  