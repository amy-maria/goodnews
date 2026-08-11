import { test, expect } from '@playwright/test';

test('home page loads and shows the news feed', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Daily Headlines' })).toBeVisible();
    await expect(page.locator('h3').first()).toBeVisible();
});

test('navbar links navigate to the correct page', async({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
    await page.getByRole('link', { name: 'Profile' }).click();
    await expect(page).toHaveURL('/profile');


    
})