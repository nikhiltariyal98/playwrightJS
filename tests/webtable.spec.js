import{test,expect} from '@playwright/test';

test('webtables', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');

    // 1. calculate number of rows and columns

    const totColumns =  table.locator('thead tr th')
    const countColumns =await totColumns.count();
    expect(countColumns).toBe(4);

    const totRows = table.locator('tbody tr');
    const countRows = await totRows.count();
    expect(countRows).toBe(5);

    //2.  Select multiple products 
    await selectProduct(totRows,'Smartwatch');
    await selectProduct(totRows,'Laptop');

    // 3. Print all product details using loop on page 1
    // for(let i=0;i<countRows;i++)
    // {
    //     const currentRow = await totRows.nth(i);
    //     for(let p =0;p<3;p++)
    //     {
    //         const data = await currentRow.locator('td').nth(p).innerText();
    //         console.log(`Row ${i} Column ${p} : ${data}`);
    //     }
    // }

    //4. Print all product details using loop all pages
    
    // number of total pages
    const pagination = await page.locator('#pagination li'); 
    const totPages = await pagination.count();

    for(let a=0;a<totPages;a++)
    {
        await pagination.nth(a).click();
        console.log(`Page ${a} details`);
        for(let i=0;i<countRows;i++)
        {
            console.log(`Row ${i} details`)
            const currentRow = await totRows.nth(i);
            for(let p =0;p<3;p++)
            {
                const data = await currentRow.locator('td').nth(p).innerText();
                console.log(`Column ${p} : ${data}`);
            }
        }
        
    }


});

async function selectProduct(totRows,prodName)
{
    const matchedRow = totRows.filter({
            // has: page.locator('td'),
            hasText: prodName
    });
    const checkBox = matchedRow.locator('input[type="checkbox"]');
    await checkBox.check();
    await expect(checkBox).toBeChecked();
}