import { describe, expect, test, afterEach } from '@jest/globals';
import { userStateService } from '../../src/services/user-state-service';

describe('userStateService', () => {
  afterEach(() => {
    userStateService.users = {};
  });
  describe('getUser', () => {
    test('should return undefined if user with id does not exist', () => {
      expect(userStateService.getUser('nonexistent')).toBeUndefined();
    });

    test('should return the user with the given id', () => {
      const id = 'someUserId1';
      userStateService.addUser(id, '2022-01-01', 100);
      expect(userStateService.getUser(id)).toEqual({
        transaction: expect.any(Array),
        freeCharge: 100,
      });
    });
  });

  describe('addUser', () => {
    test('should add a new user with the given id, date, and money', () => {
      const id = 'someUserId1';
      const date = '2022-01-01';
      const money = 100;
      userStateService.addUser(id, date, money);
      expect(userStateService.getUser(id)).toEqual({
        transaction: [date],
        freeCharge: money,
      });
    });

    test('should add the transaction to the user if the user already exists', () => {
      const id = 'someUserId';
      const date1 = '2022-01-01';
      const date2 = '2022-01-02';
      const money = 100;
      userStateService.addUser(id, date1, money);
      userStateService.addUser(id, date2, money);
      expect(userStateService.getUser(id)).toEqual({
        transaction: [date1, date2],
        freeCharge: money,
      });
    });
  });
});
