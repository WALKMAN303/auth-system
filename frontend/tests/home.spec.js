import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/')   // baseURL set in config
  await expect(page).toHaveTitle(/My App/)
})

test('user can click the main button', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Get Started')
    await expect(page).toHaveURL(/dashboard/)
})