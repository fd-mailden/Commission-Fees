import { cashInNaturalService } from '../../../src/services/commission/cashInNaturalService';
import { jest, describe, expect, test } from '@jest/globals';

const userDataMax = {
  date: '2016-01-05',
  user_id: 1,
  user_type: 'natural',
  type: 'cash_in',
  operation: {
    amount: 20000,
    currency: 'EUR',
  },
};
const userDataMin = {
  date: '2016-01-05',
  user_id: 1,
  user_type: 'natural',
  type: 'cash_in',
  operation: {
    amount: 200,
    currency: 'EUR',
  },
};

const configState = {
  get: jest.fn().mockReturnValue({
    percents: 0.03,
    max: {
      amount: 5,
    },
  }),
};

describe('cashInNaturalService', () => {
  describe('constructor', () => {
    test('sets the userData property to the passed-in user data object', () => {
      const service = new cashInNaturalService(userDataMin);
      expect(service.userData).toEqual(userDataMin);
    });

    test('throws an error when a user data object is not passed in', () => {
      expect(() => {
        new cashInNaturalService().getCommission(userDataMin);
      }).toThrow();
    });
  });

  describe('getCommission', () => {
    test('returns the calculated commission when it is less than the max amount', () => {
      const service = new cashInNaturalService(userDataMax);
      service.config = configState.get('cashInNatural');
      const commission = service.getCommission();
      expect(commission).toBe(5);
    });

    test('returns the max commission amount when the calculated commission is greater than the max amount', () => {
      const service = new cashInNaturalService(userDataMin);
      service.config = configState.get('cashInNatural');
      const commission = service.getCommission();
      expect(commission).toBe(0.06);
    });
  });
});
