import {test,expect} from '@playwright/test'

test('KeyBoard Actions',async({page})=>
{
    await page.goto('https://text-compare.com/');

    const box1 = await page.locator('#inputText1');
    const box2 = await page.locator('#inputText2');

    await box1.fill('Welcome to Keyboard actions');
    await box1.press('Control+a');
    await box1.press('Control+c');
    await box2.click();
    await box2.press('Control+v');

    expect(await box1.inputValue()).toBe(await box2.inputValue());

});