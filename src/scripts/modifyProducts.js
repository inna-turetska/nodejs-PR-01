import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';
async function modifyProducts() {
  try {
    const raw = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const data = JSON.parse(raw);
    const updateData = data.map(({ name, price, category }) => ({
      name,
      price,
      category,
    }));

    await fs.writeFile(PATH_DB, JSON.stringify(updateData, null, 2), {
      encoding: 'utf-8',
    });
    return updateData;
  } catch (error) {
    console.log(error);
  }
}
modifyProducts();
