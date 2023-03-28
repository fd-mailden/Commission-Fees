import fs from 'fs';
import { readJsonFile } from '../../src/helpers/readerFile';
import { describe, expect, test } from '@jest/globals';

describe('readJsonFile', () => {
  test('throws an exception if file is not provided', async () => {
    await expect(readJsonFile()).rejects.toThrow('File path is not provided!');
  });

  test('throws an exception if file does not exist', async () => {
    await expect(readJsonFile('invalid-file.json')).rejects.toThrow(
      "File 'invalid-file.json' does not exist!",
    );
  });

  test('throws an exception if file is empty or invalid JSON data', async () => {
    const filePath = 'invalid-json-file.json';
    const fileContent = '';

    fs.writeFileSync(filePath, fileContent);

    await expect(readJsonFile(filePath)).rejects.toThrow(
      'Unexpected end of JSON input',
    );

    fs.unlinkSync(filePath);
  });

  test('returns parsed JSON data', async () => {
    const filePath = 'valid-json-file.json';
    const fileContent = '{"name": "John Doe", "age": 30}';

    fs.writeFileSync(filePath, fileContent);

    const expected = { name: 'John Doe', age: 30 };
    const actual = await readJsonFile(filePath);

    expect(actual).toEqual(expected);

    fs.unlinkSync(filePath);
  });
});
