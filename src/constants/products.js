import path from 'node:path';
import { fileURLToPath } from 'node:url';

const fileName = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName);

export const PATH_DB = path.resolve(dirname, '../db/db.json');
export const PATH_FILES_DIR = path.resolve(dirname, '../db/files');
