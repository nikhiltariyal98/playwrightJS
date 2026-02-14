import{test,expect} from '@playwright/test';

test('checkboxes', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    // Multiple ways to select an option
    
    // await page.selectOption('#country','India');
    const dropdown = await page.locator('#country');
    await dropdown.scrollIntoViewIfNeeded();
    await dropdown.selectOption({label:'India'});
    // await dropdown.selectOption('India');
    // await dropdown.selectOption({value:'uk'});
    // await dropdown.selectOption({index:2});

    // Assert number of options available
    const dropdownValues = await page.locator('#country option');
    const countriesName = await dropdownValues.allTextContents();
    const noOfOptions = await dropdownValues.count();
    expect(noOfOptions).toBe(10);  
    
    await page.waitForTimeout(5000);

    // Check whether certain option is available or not
    expect(dropdownValues).toContainText(['India']);

    // Print all the values 
    for(let i=0;i<noOfOptions;i++)
    {
        console.log(await countriesName[i].trim());
    }


    // Selecting dropdown option by looping and selecting the particular value when found

    for(let ib =0;ib<noOfOptions;ib++)
    {
        let value = countriesName[ib].trim();
        if(value=='United States')
        {
            await dropdown.selectOption({label:value});
            await page.waitForTimeout(1000);
            break;
        }
    }
});