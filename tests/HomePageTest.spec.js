import{test,expect} from '@playwright/test'

test('HomePage Test',async ({page})=>
{
    await page.goto('/index.html');
    await expect(page).toHaveTitle('STORE');
    const pageURL = await page.url();
    console.log("Page URL : ",pageURL);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await page.close();

});