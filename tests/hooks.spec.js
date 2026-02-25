import{test,expect} from '@playwright/test';

let page;
// test.beforeAll('hook before all tests', async ({browser})=>{
test.beforeEach('hook before each test', async ({browser})=>{
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/index.html');
    await page.locator("#login2").click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.waitForTimeout(2000);
    await page.getByRole('button',{name:'Log in'}).click();
});


test('home page test', async ()=>{

   expect(await page.getByRole('link',{name:"Samsung galaxy s6"})).toBeVisible();
   
    
});

test('Add product test', async ()=>{

    await page.getByRole('link',{name:"Samsung galaxy s6"}).click();
    await page.locator('a').filter({hasText:'Add to cart'}).click();
    page.on('dialog', async dialog => {
        expect(await dialog.message()).hasText('Product added');
        await dialog.accept();
    });

});

// test.afterAll('hook after all tests', async ()=>{

test.afterEach('hook after each test', async ()=>{
await page.locator('#logout2').click();
});