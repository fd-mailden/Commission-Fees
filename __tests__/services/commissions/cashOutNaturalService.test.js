import { cashOutNaturalService } from '../../../src/services/commission/cashOutNaturalService';
import { describe, expect, test, beforeEach } from '@jest/globals';
import { configurationsState } from '../../../src/states/configurations/configurationsState';

describe('cashOutNaturalService', () => {
  const userData = [
    {
      date: '2016-01-06',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: { amount: 30000, currency: 'EUR' },
    },
    {
      date: '2016-01-07',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: { amount: 1000.0, currency: 'EUR' },
    },
    {
      date: '2016-01-07',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: { amount: 100.0, currency: 'EUR' },
    },
  ];

  beforeEach(() => {
    configurationsState.set('cashOutNatural', {
      percents: 0.3,
      week_limit: {
        amount: 1000,
        currency: 'EUR',
      },
    });
  });

  describe('getCommission()', () => {
    test('if cash out more week limit', () => {
      const service = new cashOutNaturalService(userData[0]);
      const commission = service.getCommission();
      expect(commission).toBe(87);
    });

    test('if we csh out week limit ', () => {
      const service = new cashOutNaturalService(userData[1]);
      const commission = service.getCommission();
      expect(commission).toBe(3);
    });

    test('if week limit exceeded ', () => {
      const service = new cashOutNaturalService(userData[2]);
      const commission = service.getCommission();
      expect(commission).toBe(0.3);
    });
  });
});
