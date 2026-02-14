import{test,expect} from '@playwright/test'

test('handle hidden dropddown',async ({page})=>{

    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();
    await page.locator("//span[normalize-space() ='PIM']").click();
    await page.waitForSelector("(//div[normalize-space()='-- Select --']//div//i)[2]");
    await page.locator("(//div[normalize-space()='-- Select --']//div//i)[2]").click();
    // waits for atleast the second option to load.
    await expect(page.locator('[role="option"]').nth(1)).toBeVisible();


    const allOptions = await page.locator('[role="option"]');
    const total = await allOptions.count();
    await expect(total).toBe(29);

//     for(let i =0;i<total;i++)
//     {
//         const choiceName = await allOptions.nth(i).innerText();
//         if(choiceName=='Support Specialist')
//         {
//             await allOptions.nth(i).click();
//             await page.waitForTimeout(5000);
//             break;
//         }
//    }
    await page.getByRole('option', { name: 'Support Specialist' }).click();
    await page.waitForTimeout(5000);

    

}); 