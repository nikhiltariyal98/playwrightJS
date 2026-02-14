import{test,expect} from '@playwright/test';

test('checkboxes', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const checkboxes = await page.locator("//table[@id='productTable']//input[@type='checkbox']");
    const c = await checkboxes.count();
    for(let i =0;i<c;i++)
    {
        await checkboxes.nth(i).check();
        await page.waitForTimeout(1000);
        await checkboxes.nth(i).uncheck();
        await page.waitForTimeout(1000);
    }
});