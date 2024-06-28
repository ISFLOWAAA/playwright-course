import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=www.mercadolibre&oq=www.mercadolibre&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTEwODYxajBqMqgCALACAQ&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Mercado Libre Colombia - Enví' }).click();
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('iphone');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('Enter');
  await page.getByRole('link', { name: 'Apple iPhone SE SE (3ª generación, 128 GB) - Azul medianoche - Distribuidor' }).click();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
});

