import {test, expect } from "@playwright/test";

test('handleInputBox', async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // InputBox
    await expect(await page.locator('#name')).toBeEmpty();
    await page.locator('#name').fill('Nikhil Tariyal');
    await page.locator('#email').fill('ntariyal98@gmail.com');
    await page.locator('#phone').fill('123456789');
    await page.locator('#textarea').fill('New delhi- 110076');
    
    // checkbox
    // await page.locator('#male').check();
    await page.check('#male');
    await expect(await page.locator('#male')).toBeChecked();


});

