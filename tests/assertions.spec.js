import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/index.html');
  await expect(page).not.toHaveURL('NIKHIL');
  await expect(page).toHaveTitle('STORE');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
  await page.getByRole('link',{name:"About us"}).click();
  await expect(page.getByRole('button',{name:'Play Video'})).toHaveAttribute('aria-disabled','false');
  await page.locator('#videoModal').getByLabel('Close').click();

  await expect(page.locator('//a')).toHaveCount(33);


  
});