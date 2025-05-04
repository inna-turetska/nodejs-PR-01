import { PATH_DB } from '../constants/products.js';
import fs from 'fs/promises';

async function groupProductsByCategories() {
  const raw = await fs.readFile(PATH_DB, { encouding: 'utf-8' });
  const data = JSON.parse(raw);
  return data.reduce((acc, { category, name }) => {
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(name);
    return acc;
  }, {});
}
console.log(await groupProductsByCategories());
