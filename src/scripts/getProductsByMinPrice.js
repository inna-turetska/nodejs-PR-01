import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

async function getProductsByMinPrice(price) {
  try {
    const raw = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const data = JSON.parse(raw);
    const productsByMinPrice = data.filter((p) => p.price >= price);
    return productsByMinPrice;
  } catch (error) {
    console.log(error);
  }
}

getProductsByMinPrice(500).then((products) => {
  console.log(products);
});
