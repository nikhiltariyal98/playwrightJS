import{test,expect} from '@playwright/test';

test('datePicker', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.click('#datepicker')
    // 1. Entering the date directly what we want
    // await page.fill('#datepicker','02/14/2026');

    // Let's use toggle buttons to select the particular date
    const moYear = new Date("February 2021");
    const day = "12";
    const prev = await page.locator('[title="Prev"]');
    const next = await page.locator('[title="Next"]')
    const date = await page.locator(`[data-date="${day}"]`);
    while(true)
    {
        const header = new Date(await page.locator('.ui-datepicker-title').innerText());
        if(header<moYear)
        {
            await next.click();
        }
        else if(header>moYear){
            await prev.click();
        }
        else
        {
            await date.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
    


});