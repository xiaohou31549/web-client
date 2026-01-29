import { expect, test } from '@playwright/test';

test('home page renders hero headline', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /the one stop resource/i })).toBeVisible();
});

test('contact page renders contact form header', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.getByRole('heading', { name: /love to hear from you/i })).toBeVisible();
});

test('privacy policy page renders heading', async ({ page }) => {
  await page.goto('/privacy-policy');
  await expect(page.getByRole('heading', { name: 'Privacy Policy', level: 1 })).toBeVisible();
});

test('terms page renders heading', async ({ page }) => {
  await page.goto('/terms-condition');
  await expect(page.getByRole('heading', { name: /terms and condition/i })).toBeVisible();
});

test('home page renders hero video source', async ({ page }) => {
  await page.goto('/');
  const videoSource = page.locator('video source');
  await expect(videoSource).toHaveAttribute('src', /\/assets\/videos\/hah\.mp4/i);
});

test('contact form shows validation errors on submit', async ({ page }) => {
  await page.goto('/contact');
  await page.locator('form').first().evaluate((form) => form.requestSubmit());

  await expect(page.getByText('First name is required')).toBeVisible();
  await expect(page.getByText('Last name is required')).toBeVisible();
  await expect(page.getByText('Email is required')).toBeVisible();
  await expect(page.getByText('Phone number is required')).toBeVisible();
  await expect(page.getByText('Message is required')).toBeVisible();
});
