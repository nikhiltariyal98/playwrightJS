import{test,expect} from '@playwright/test';

test('page screenshot',async({page})=>{

    await page.goto('https://www.google.com/');
    await page.screenshot({path:'tests/screenshots/'+'page.png'});

});

test('full page screenshot',async({page})=>{

    await page.goto('https://www.google.com/');
    await page.screenshot({path:'tests/screenshots/'+'fullpage.png',fullPage:true});


});
test('element screenshot',async({page})=>{

    await page.goto('https://www.google.com/');
    const element=page.getByRole('button', { name: 'Google Search' });
    await element.screenshot({path:'tests/screenshots/'+'element.png'});
});