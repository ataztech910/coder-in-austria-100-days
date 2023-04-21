import { test, expect } from '@playwright/test';

const host = 'http://localhost:3000'

test('Page loaded', async ({ page }) => {
    await page.goto(host);
    await expect(page).toHaveTitle(/Coder in Austria/);
  });
  
  test('Page rendered', async ({ page }) => {
    await page.goto(host);
  
    await page.getByRole('contentinfo').getByRole('link', { name: 'Home' }).hover();
    await page.getByRole('contentinfo').getByRole('link', { name: 'Courses' }).hover();
    await page.getByRole('contentinfo').getByRole('link', { name: 'Blog' }).hover();
  
    await page.getByPlaceholder('search here...').click();
    await page.locator('[data-test-id="searchButton"]').click();
    await page.getByRole('button', { name: 'EN' }).click();
    await page.getByPlaceholder('youremail@email.com').click();
    await page.getByPlaceholder('your password').click();
    await page.getByRole('button', { name: 'Create an account' }).click();
    await page.locator('[data-test-id="signUp"]').click();
    await page.getByPlaceholder('type your search parameters here...').click();
    await page.getByPlaceholder('type your email here...').click()
  });
  