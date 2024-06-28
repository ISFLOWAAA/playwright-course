import { test, expect } from '@playwright/test';

test('test locators 5', async ({ page }) =>  {

await page.goto('https://www.mercadolibre.com.co')
await page.getByRole('link',{name: "Ingresa",exact: true }).click()

await page.pause()





});