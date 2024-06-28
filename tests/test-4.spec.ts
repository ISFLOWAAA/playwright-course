import { test, expect } from '@playwright/test';

test('test', async ({ page },) => {
  await page.goto('https://www.google.com/search?q=mercado+libre&oq=mercado+libre&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDUxMTZqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Mercado Libre Colombia - Enví' }).click();
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('iphone');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('Enter');
  await page.getByRole('link', { name: 'Apple iPhone 12 Pro Max (128 Gb) - Grafito' }).click();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
  await page .screenshot({path: 'Screenshots/Comprar ahora.png', fullPage:true})   


});