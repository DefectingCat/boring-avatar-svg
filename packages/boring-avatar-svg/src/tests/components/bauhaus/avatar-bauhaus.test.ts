import avatar from '../../../index';
import fs from 'fs/promises';
import path from 'path';

describe('avatar bauhaus', () => {
  test('generate 40', async () => {
    const result = avatar({
      variant: 'bauhaus',
    });
    const filePath = path.resolve(__dirname, './40.svg');
    const txt = await fs.readFile(filePath, { encoding: 'utf-8' });
    expect(result).toBe(txt);
  });
  test('generate 80', async () => {
    const result = avatar({
      variant: 'bauhaus',
      size: 80,
    });
    const filePath = path.resolve(__dirname, './80.svg');
    const txt = await fs.readFile(filePath, { encoding: 'utf-8' });
    expect(result).toBe(txt);
  });
  test('generate 128', async () => {
    const result = avatar({
      variant: 'bauhaus',
      size: 128,
    });
    const filePath = path.resolve(__dirname, './128.svg');
    const txt = await fs.readFile(filePath, { encoding: 'utf-8' });
    expect(result).toBe(txt);
  });
  test('generate square', async () => {
    const result = avatar({
      variant: 'bauhaus',
      square: true,
    });
    const filePath = path.resolve(__dirname, './square.svg');
    const txt = await fs.readFile(filePath, { encoding: 'utf-8' });
    expect(result).toBe(txt);
  });
});
