import { test, expect } from '@playwright/test';

test('prueba MC', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co');

  // Click the get started link.
  await page.locator('input[id=\"cb1-edit\"]').fill('Iphone')
  await page.keyboard.press("Enter")

  await expect(page.locator('//ol[contains(@class,\'ui-search-layout\')]')).toBeVisible();
  await page.pause()

  const titles= await page.locator ('//ol[contains(@class, \'ui-search-layout\')]//li//h2').allInnerTexts()

  console.log('the total number of result is:', titles.length)

   for(let title of titles){
       console.log('the title is:', title)
   }

   

});


