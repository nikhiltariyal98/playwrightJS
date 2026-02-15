import {test, expect } from "@playwright/test";

test('handleInputBox', async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //Upload single file
    const singleUpload = await page.locator('#singleFileInput');
    await singleUpload.setInputFiles('tests/upload files/1.txt');
    await page.getByRole('button', { name: 'Upload Single File' }).click();

    await expect(page.locator('#singleFileStatus')).toContainText('1.txt');

    await page.waitForTimeout(3000);

    //Upload Multiple files
    const multipleUpload = await page.locator('#multipleFilesInput');
    await multipleUpload.setInputFiles(['./tests/upload files/1.txt','./tests/upload files/2.txt']);
    await page.getByRole('button', { name: 'Upload Multiple Files' }).click();

    await expect(page.locator('#multipleFilesStatus')).toContainText('1.txt');
    await expect(page.locator('#multipleFilesStatus')).toContainText('2.txt');

    await page.waitForTimeout(3000);
});