import{test,expect} from '@playwright/test';

test('mouse hover', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const hoverButton = page.getByRole('button',{name:"Point Me"});
    await hoverButton.hover();
    const allLinks = hoverButton.locator('a').allInnerTexts();
    for(let i =0;i<allLinks.length;i++){
        console.log(allLinks[i]);
    }


});

test('right click', async ({page})=>{

    await page.goto('https://www.softwaretestingmentor.com/automation-practice-page-right-click-demo/');
    
    // Right click
    await page.getByRole('heading',{name:"Right Click Demo"}).nth(0).click({button:'right'});

    // Double click
    await page.waitForTimeout(2000);
});


test('double click', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // Double click
    await page.getByRole('button',{name:'Copy Text'}).dblclick();

    expect(await page.locator('#field2')).toHaveValue('Hello World!');
    await page.waitForTimeout(3000);
});

test.only('drag and drop', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const dragLocation = await page.locator('#draggable');
    const dropLocation = await page.locator('#droppable');
    await dragLocation.dragTo( dropLocation);

    expect(await dropLocation.innerText()).toBe('Dropped!');
    await page.waitForTimeout(3000);
});