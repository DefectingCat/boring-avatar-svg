import {
  getAngle,
  getBoolean,
  getDigit,
  getModulus,
  getRandomColor,
  getUnit,
  hashCode,
} from '../utils';

describe('utils test', () => {
  test('hash code', () => {
    expect(hashCode('xfy')).toBe(118603);
  });

  test('get modules', () => {
    expect(getModulus(10, 100)).toBe(10);
  });

  test('get digit', () => {
    expect(getDigit(42, 1)).toBe(4);
  });

  test('get boolean', () => {
    expect(getBoolean(42, 1)).toBeTruthy();
  });

  test('get angle', () => {
    expect(getAngle(42, 1)).toBe(1.3639275316029187);
  });

  test('get unit', () => {
    expect(getUnit(42, 1, 1)).toBe(-0);
  });

  test('get random color', () => {
    expect(
      getRandomColor(
        42,
        ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
        6
      )
    ).toBe('#92A1C6');
  });
});
