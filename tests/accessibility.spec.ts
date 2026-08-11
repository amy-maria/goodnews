import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility scans', () => {
    test('home page has no automatically detected accessibility violations', async ({ page }) => {
        await page.goto('/');
        const results = await new AxeBuilder({ page }).analyze();
        expect(results.violations).toEqual([]);
    });
    test('about page has no accessibility violations', async ({ page }) => {
        await page.goto('/about');
        const results = await new AxeBuilder({ page }).analyze();
        expect(results.violations).toEqual([]);
    });
    test('profile page has no automatically detected accessibility violations', async ({ page }) => {
        await page.goto('/profile');
        const results = await new AxeBuilder({ page }).analyze();
        expect(results.violations).toEqual([]);
    });
});