import{test,expect} from '@playwright/test';
import { ai } from '@zerostep/playwright';
test('zerostep ai',async({page})=>{

     // An object with page and test must be passed into every call
    const aiArgs = { page, test };
    await page.goto('https://www.google.com/');
    await page.locator('#APjFqb').click();
await ai(
  'type iphone 17 and press enter in the search box',
  aiArgs
);
    await ai(
  'wait for search results page to fully load and then take a screenshot',
  aiArgs
);
});
