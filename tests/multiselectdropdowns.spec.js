import{test,expect} from '@playwright/test';

test('multiselect dropdowns', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    // 1. Select multiple dropdown values
    await page.selectOption('#colors',['Blue','Red']);

    // 2. Assert total choices provided
    const totOptionsProvided = await page.locator('#colors option');
    await expect(totOptionsProvided).toHaveCount(7); 

    // 3.Fetch total choices provided through JS array
    const totChoicesProvided = await page.$$('#colors option');
    await expect(totChoicesProvided).toHaveLength(7);

    // 4. Check presence of value in dropdown
    const totalOptionsName = await page.locator('#colors option').allInnerTexts();
    await expect(totalOptionsName).toContain('Blue');

    // 5. Negative assertionnfor checking Black shouldn't bt there
    await expect(totalOptionsName).not.toContain('Black')
    

});