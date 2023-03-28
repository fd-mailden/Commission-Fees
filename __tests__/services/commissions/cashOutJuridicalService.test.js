import { cashOutJuridicalService } from '../../../src/services/commission/cashOutJuridicalService';
import { jest, describe, expect, test } from '@jest/globals';

const configState = {
  get: jest.fn().mockReturnValue({
    percents: 0.3,
    min: {
      amount: 0.5,
      currency: 'EUR',
    },
  }),
};

describe('cashOutJuridicalService', () => {
  const userDataMin = {
    date: '2016-01-06',
    user_id: 2,
    user_type: 'juridical',
    type: 'cash_out',
    operation: {
      amount: 300.0,
      currency: 'EUR',
    },
  };
  const userDataMax = {
    date: '2016-01-06',
    user_id: 2,
    user_type: 'juridical',
    type: 'cash_out',
    operation: {
      amount: 0.3,
      currency: 'EUR',
    },
  };

  describe('getCommission()', () => {
    test('returns the commission when it is greater than the minimum amount', () => {
      const service = new cashOutJuridicalService(userDataMin);
      service.config = configState.get('cashOutJuridical');
      const commission = service.getCommission();
      expect(commission).toBe(0.9);
    });

    test('returns the minimum amount when the commission is less than the minimum amount', () => {
      const service = new cashOutJuridicalService(userDataMax);
      service.config = configState.get('cashOutJuridical');
      const commission = service.getCommission();
      expect(commission).toBe(0.5);
    });
  });
});
