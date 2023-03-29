import { userService } from '../../src/services/userService';
import { describe, expect, test } from '@jest/globals';

describe('userService', () => {
  const user = {
    transaction: ['2022-03-20', '2022-03-23', '2022-03-25'],
    freeCharge: 100,
  };
  const weekLimit = 200;
  const currentDate = '2022-03-27';

  describe('getIsInOneWeek', () => {
    test('should return true if the previous transaction date is in the same week as the current date', () => {
      const userServiceInstance = new userService(user, currentDate, weekLimit);
      const previousDate = '2022-03-25';

      const result = userServiceInstance.getIsInOneWeek(previousDate);

      expect(result).toBe(true);
    });

    test('should return false if the previous transaction date is not in the same week as the current date', () => {
      const userServiceInstance = new userService(user, currentDate, weekLimit);
      const previousDate = '2022-03-20';

      const result = userServiceInstance.getIsInOneWeek(previousDate);

      expect(result).toBe(false);
    });

    test('should return false if the user does not have any transactions', () => {
      const userServiceInstance = new userService({}, currentDate, weekLimit);

      const result = userServiceInstance.getIsInOneWeek(undefined);

      expect(result).toBe(false);
    });
  });

  describe('currentLimit', () => {
    test('should return the week limit if the user is not defined', () => {
      const userServiceInstance = new userService(
        undefined,
        currentDate,
        weekLimit,
      );

      const result = userServiceInstance.currentLimit();

      expect(result).toBe(weekLimit);
    });

    test('should return the free charge limit if the previous transaction is in the same week as the current date', () => {
      const userServiceInstance = new userService(user, currentDate, weekLimit);

      const result = userServiceInstance.currentLimit();

      expect(result).toBe(user.freeCharge);
    });

    test('should return the week limit if the previous transaction is not in the same week as the current date', () => {
      const userServiceInstance = new userService(
        user,
        '2022-04-01',
        weekLimit,
      );

      const result = userServiceInstance.currentLimit();

      expect(result).toBe(weekLimit);
    });
  });
});
