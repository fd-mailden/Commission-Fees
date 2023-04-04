import { describe, expect, test } from '@jest/globals';
import { calculateCommissionService } from '../../src/services/calculateCommissionService';

describe('calculateCommissionService method getCommission', () => {
  test('returns the correct commission for a given amount and interest rate', () => {
    const { getCommission } = calculateCommissionService;
    expect(getCommission(100, 5)).toBe(5);
    expect(getCommission(500, 2.5)).toBe(12.5);
    expect(getCommission(2000, 1.75)).toBe(35);
  });

  test('rounds the commission to two decimal places', () => {
    const { getCommission } = calculateCommissionService;
    expect(getCommission(100, 3.333)).toBe(3.34);
    expect(getCommission(500, 1.2345)).toBe(6.18);
    expect(getCommission(2000, 0.98765)).toBe(19.76);
  });

  test('returns 0 if the amount or interest rate are zero', () => {
    const { getCommission } = calculateCommissionService;
    expect(getCommission(0, 5)).toBe(0);
    expect(getCommission(100, 0)).toBe(0);
    expect(getCommission(0, 0)).toBe(0);
  });
  test('rounding', () => {
    const { getCommission } = calculateCommissionService;
    expect(getCommission(0.01, 0.03)).toBe(0.01);
  });
});
