import { createFakeProduct } from '../utils/createFakeProducts.js';
import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

async function generateProducts(number) {
  try {
    const raw = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const products = JSON.parse(raw);
    for (let i = 0; i < number; i++) {
      const newProduct = createFakeProduct();
      products.push(newProduct);
    }
    const data = JSON.stringify(products, null, 2);
    await fs.writeFile(PATH_DB, data, { encoding: 'utf-8' });
    return data;
  } catch (error) {
    console.log(error);
  }
}
generateProducts(5);
