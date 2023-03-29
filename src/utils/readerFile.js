import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

export async function readJsonFile(filePath) {
  try {
    if (!filePath) throw new Error('File path is not provided!');

    if (!fs.existsSync(filePath)) {
      throw new Error(`File '${filePath}' does not exist!`);
    }
    const data = await readFile(filePath);
    const json = JSON.parse(data);
    if (!json || json.length === 0) {
      throw new Error('File is empty or invalid JSON data!');
    }

    return json;
  } catch (err) {
    throw err;
  }
}
