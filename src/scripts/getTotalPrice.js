import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

async function getTotalPrice() {
  try {
    const raw = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const data = JSON.parse(raw);
    const totalPrice = data.reduce(
      (sum, product) => sum + Number(product.price),
      0,
    );
    return totalPrice;
  } catch (error) {
    console.log(error);
  }
}
getTotalPrice().then((totalPrice) => {
  console.log(`Сума продуктів: ${totalPrice}`);
});
