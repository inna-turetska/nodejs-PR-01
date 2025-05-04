import path, { join } from 'node:path';
import { PATH_DB, PATH_FILES_DIR } from '../constants/products.js';
import fs from 'node:fs/promises';

async function createProductsFiles() {
  const raw = await fs.readFile(PATH_DB, 'utf-8');
  const data = JSON.parse(raw);

  for (const product of data) {
    const fileName = product.name.toLowerCase().replace(/\s+/g, '-') + '.json';

    await fs.writeFile(
      path.join(PATH_FILES_DIR, fileName),
      JSON.stringify(product, null, 2),
      'utf-8',
    );
  }
}
createProductsFiles();
