import { test, expect } from '@playwright/test';

const host = 'http://localhost:3000';

test('Page loaded', async ({ page }) => {
  await page.goto(`${host}/auth/signin`);
  await expect(page).toHaveTitle(/Coder in Austria/);
});

test('Page rendered', async ({ page }) => {
  await page.goto(`${host}/auth/signin`);
  await page
    .getByPlaceholder("Enter your Username")
    .fill("webconsult.ekb@gmail.com");
  await page
    .getByPlaceholder("Enter your Password")
    .fill("Asdqwe123!");
  await page.getByText('Sign in').last().click();

  await expect(async () => {
    expect(page.url()).toBe(`${host}/profile`);
  }).toPass();
});
