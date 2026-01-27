import {test,expect} from '@playwright/test'

test('Valid login',async({page})=>
{
    await page.goto('/index.html');
    await page.getByRole('link',{name:"Log in"}).click();
    await expect(page.locator('#logInModalLabel')).toBeVisible();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button',{name:'Log in'}).click();

    await expect(page.locator('#logout2')).toBeVisible();
    
});

test('Invalid login',async({page})=>
{
    await page.goto('/index.html');
    await page.getByRole('link',{name:"Log in"}).click();
    await expect(page.locator('#logInModalLabel')).toBeVisible();
    await page.locator('#loginusername').fill('nikhil');
    await page.locator('#loginpassword').fill('test@123');
    
    
    // Listen for dialog
    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toBe('Wrong password');
       
        await dialog.accept();
    });

    await page.getByRole('button',{name:'Log in'}).click(); 
    

});

