import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('An unobtrusive habit forming companion to help you get on the most out of your days.');
});
