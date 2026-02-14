import{test,expect} from '@playwright/test';

test('Alert with ok', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toBe('I am an alert box!');
        await page.waitForTimeout(3000);
        await dialog.accept();
        await page.waitForTimeout(3000);
    })
    await page.locator('#alertBtn').click();
    await page.waitForTimeout(3000);
});

test('Alert with ok and cancel', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toBe('Press a button!');
        await page.waitForTimeout(3000);
        await dialog.dismiss();
        await page.waitForTimeout(3000);
    })
    await page.locator('#confirmBtn').click();
    expect(await page.locator('#demo').innerText()).toBe('You pressed Cancel!');
    await page.waitForTimeout(3000);
});

test.only('prompt alert', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toBe('Please enter your name:');
        expect(dialog.defaultValue()).toBe('Harry Potter');
        await dialog.accept('Nikhil Tariyal');
        await page.waitForTimeout(3000);
    })
    await page.locator('#promptBtn').click();
    expect(await page.locator('#demo').innerText()).toBe('Hello Nikhil Tariyal! How are you today?');

    await page.waitForTimeout(3000);
});