import { describe, expect, test } from '@jest/globals';
import { weekValidationService } from '../../src/services/weekValidationService';

describe('week Validation service', () => {
  test('returns true if two dates are in the same week', () => {
    const previousDate = '2022-03-21';
    const currentDate = '2022-03-27';
    expect(weekValidationService.getIsThisWeek(previousDate, currentDate)).toBe(
      true,
    );
  });

  test('returns false if two dates are in different weeks', () => {
    const previousDate = '2022-03-20';
    const currentDate = '2022-03-27';
    expect(weekValidationService.getIsThisWeek(previousDate, currentDate)).toBe(
      false,
    );
  });

  test('returns false if the previous date is after the current date', () => {
    const previousDate = '2022-03-27';
    const currentDate = '2022-03-20';
    expect(weekValidationService.getIsThisWeek(previousDate, currentDate)).toBe(
      false,
    );
  });

  test('returns false if one of the dates is invalid', () => {
    const previousDate = '2022-03-20';
    const currentDate = 'invalid-date';
    expect(weekValidationService.getIsThisWeek(previousDate, currentDate)).toBe(
      false,
    );
  });
});
