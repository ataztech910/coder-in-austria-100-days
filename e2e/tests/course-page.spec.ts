import { test, expect } from '@playwright/test';

const host = 'http://localhost:3000';

test('Page loaded', async ({ page }) => {
  await page.goto(`${host}/courses/basic-informatics-and-computer-science`);
  await expect(page).toHaveTitle(/Coder in Austria/);
});

test('Page rendered', async ({ page }) => {
  //TODO move this step to setup
  await page.goto(`${host}/auth/signin`);
  await page.getByPlaceholder('Enter your Username').fill('webconsult.ekb@gmail.com');
  await page.getByPlaceholder('Enter your Password').fill('Asdqwe123!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL(`${host}/profile`);

  await page.goto(`${host}/courses/basic-informatics-and-computer-science`);
  await expect(page.getByRole('heading', { name: 'Basic informatics and computer science' })).toBeVisible();
  await expect(page.getByText(/What Is AWS?/).last()).toBeVisible();
  await expect(page.getByText(/Basic Informatics/).last()).toBeVisible();
  await expect(page.getByText(/Start course/).last()).toBeVisible();
  const lesson = page.getByTestId('lessonItem').first();
  console.log(lesson.getByText(/What Is AWS?/));
  await expect(lesson.getByRole('link')).toHaveAttribute('aria-checked', 'true')
});



