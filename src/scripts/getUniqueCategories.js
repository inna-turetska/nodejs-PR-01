import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

async function getUniqueCategories() {
  try {
    const raw = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const data = JSON.parse(raw);

    return data.reduce((acc, product) => {
      if (acc.includes(product.category)) {
        return acc;
      }
      acc.push(product.category);
      return acc;
    }, []);
  } catch (error) {
    console.log(error);
  }
}
getUniqueCategories().then((acc) => {
  console.log(acc);
});
