import { describe, expect, test } from '@jest/globals';
import { getCommission } from '../../src/helpers/getCommission';

describe('getCommission', () => {
  test('returns the correct commission for a given amount and interest rate', () => {
    expect(getCommission(100, 5)).toBe(5);
    expect(getCommission(500, 2.5)).toBe(12.5);
    expect(getCommission(2000, 1.75)).toBe(35);
  });

  test('rounds the commission to two decimal places', () => {
    expect(getCommission(100, 3.333)).toBe(3.33);
    expect(getCommission(500, 1.2345)).toBe(6.17);
    expect(getCommission(2000, 0.98765)).toBe(19.75);
  });

  test('returns 0 if the amount or interest rate are zero', () => {
    expect(getCommission(0, 5)).toBe(0);
    expect(getCommission(100, 0)).toBe(0);
    expect(getCommission(0, 0)).toBe(0);
  });

  test('returns NaN if the amount or interest rate are negative', () => {
    expect(getCommission(-100, 5)).toBe(0);
    expect(getCommission(100, -5)).toBe(0);
    expect(getCommission(-100, -5)).toBe(0);
  });
});
