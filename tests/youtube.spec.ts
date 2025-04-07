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

test ('Click on a video', async ({ page }) => {
    
    //Go to Youtube
    await page.goto('https://www.youtube.com')

    //Search for a video
    const SearchBar = page.getByPlaceholder('Search');
    await SearchBar.fill('Playwright Tutorial');
    await SearchBar.press('Enter');

    //Wait for the search results to load
    const VideoContents = page.locator("//ytd-search[@role='main']");

    const FirstVideo = page.locator('ytd-video-renderer');
    await FirstVideo.first()    
    await expect(FirstVideo).toBeVisible();

    //First Video Title
    const VideoTitle = page.locator("(//a[@id='video-title'])[1]");
    await expect(VideoTitle).toBeVisible();
    await VideoTitle.innerText();
    console.log(await VideoTitle.innerText());

    //Click on the first video
    await VideoTitle.click();
    await expect(page).toHaveURL(/\/watch\?v=/);
    await expect(VideoTitle).toBeVisible();
})

