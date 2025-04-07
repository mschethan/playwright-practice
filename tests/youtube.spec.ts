import { test, expect } from '@playwright/test';

test('Go to Youtube', async ({ page }) => {
    await page.goto('https://www.youtube.com/');

    await expect(page).toHaveURL('https://www.youtube.com/');
})

test('Search for a video', async ({ page }) => {
    await page.goto('https://www.youtube.com/');

    const SearchBar = page.getByPlaceholder('Search');
    await SearchBar.fill('Playwright Tutorial');
    await SearchBar.press('Enter');

    const VideoContents = page.locator("//ytd-search[@role='main']");
    await expect(VideoContents).toBeVisible();

})
