import{test,expect} from '@playwright/test';

test('frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');
    const parentFrame = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await parentFrame.locator('[name="mytext3"]').fill("WElcome");
    await page.waitForTimeout(2000);

    // Nested frame
    const childFrames = await parentFrame.childFrames();
    childFrames[0].locator('#i6').check();
    await page.waitForTimeout(3000);




});