import{test,expect} from '@playwright/test';

test('multiselect dropdowns', async ({page})=>{

    await page.goto('https://www.redbus.in/')
    await page.locator('//input[@id="srcinput"]').fill('Delhi');
    await page.waitForSelector('[role="option"]');
    // const allSuggestions = await page.locator('[role="option"] [role="heading"]').allInnerTexts();
    const allSuggestions = await page.locator('[role="option"] [role="heading"]');
    const totalSuggestions =await allSuggestions.count();
    // let i =0;
    for(let i =0;i<totalSuggestions;i++)
    {
        // console.log(`Choice ${i}`,choice);
        const choice = await allSuggestions.nth(i).innerText();
        console.log(choice);
        if(choice == 'Agra')
        {
            await allSuggestions.nth(i).click();
            await page.waitForTimeout(3000);
            break;
        }
        // i++;
    }

});