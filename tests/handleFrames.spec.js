import{test,expect} from '@playwright/test';
import { url } from 'node:inspector';

test('frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');
    // Total frames on webpage
    const allFrames = await page.frames();
    expect(allFrames).toHaveLength(7);

    // Approach 1 - Using name or url of the page
    // const var = await page.frame('name');
    // const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    // await frame1.fill("[name='mytext1']",'Nikhil Tariyal');
    
    // await page.waitForTimeout(3000);


    // Approach 2 - Using frame locator
    const frame1InputBox = await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]');
    await frame1InputBox.fill('Nik');
    await page.waitForTimeout(3000);
});