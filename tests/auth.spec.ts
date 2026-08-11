import { test, expect } from '@playwright/test';

async function attemptLogin(page: import('@playwright/test').Page, email: string, password: string) {
    await page.getByPlaceholder('Email').fill(email);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Log In'}).click();
}
test('locks out login after 5 failed attempts', async ({ page }) => {
    
    const email = `test-${Date.now()}@example.com`;
    const password = 'password123';
    await page.goto('/profile');

    //create the account
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await page.getByPlaceholder('Email').fill(email);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page.getByText('Account created. You can now log in.')).toBeVisible();
    await page.getByRole('button', { name: 'Log In' }).click();

    //signin with 5 attempts with wrong password
    for (let i = 0; i < 5; i++) {
        await attemptLogin(page, email, 'wrong-password');
        await expect(page.getByText('Invalid email or password')).toBeVisible();
    }

    //6th attempt uses correct password but should still be locked out
    await attemptLogin(page, email, password);
    await expect(page.getByText('Invalid email or password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Log Out' })).not.toBeVisible();
});

test('a successful login clears a previous failed attempt', async ({ page }) => {
    const email = `test-clear-${Date.now()}@example.com`;
    const password = 'password123';
    await page.goto('/profile');

    //create account
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await page.getByPlaceholder('Email').fill(email);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page.getByText('Account created. You can now log in.')).toBeVisible();

    await page.getByRole('button', { name: 'Log In' }).click();

    //2 failed attempts
    await attemptLogin(page, email, 'wrong-password');
    await expect(page.getByText('Invalid email or password')).toBeVisible();
    await attemptLogin(page, email, 'wrong-password');
    await expect(page.getByText('Invalid email or password')).toBeVisible();

    //successful password, should clear form
    await attemptLogin(page, email, password);
    await expect(page.getByText(email)).toBeVisible();
    await page.getByRole('button', { name: 'Log Out' }).click();
    await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
    await page.getByRole('button', { name: 'Log In' }).click();

    //four more failed attempts after clear
    for (let i = 0; i < 4; i++) {
        await attemptLogin(page, email, 'wrong-password');
        await expect(page.getByText('Invalid email or password')).toBeVisible();
    }
        //5th attempt after clear w/ correct password to prove count reset
        await attemptLogin(page, email, password);
        await expect(page.getByText(email)).toBeVisible();
        await expect(page.getByRole('button', { name: 'Log Out' })).toBeVisible();
    
    });
