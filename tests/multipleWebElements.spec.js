import {test,expect} from '@playwright/test'

test('Valid login',async({page})=>
{
    await page.goto('/index.html');
    // One way 
    const allMobiles = page.locator("//a[contains(@class,'hrefch')]");
    const mobileNames = await allMobiles.allInnerTexts();
    for(const i of mobileNames)
    {
        // Run in debug mode to see the logs
        console.log("Mobile : ",i);
    }

    // Second way 
    // const allMobiles = await page.$$("//a[contains(@class,'hrefch')]");
    // for(const i of allMobiles)
    // {
    //    const name = await i.textContent();
    //    console.log("Mobile : ", name);  
    // }
    
});
