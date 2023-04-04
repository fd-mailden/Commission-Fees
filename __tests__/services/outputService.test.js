import { describe, expect, test, jest } from '@jest/globals';
import { outputService } from '../../src/services/outputService';

describe('outputService', () => {
  test('should log formatted commission data to the console', () => {
    const commissionData = [
      { commission: 1.23456 },
      { commission: 5.6789 },
      { commission: 0.123 },
      { error: 'error' },
    ];

    const mockFn = jest.spyOn(console, 'log').mockImplementation(() => {});

    outputService.outputInConsole(commissionData);

    expect(mockFn).toHaveBeenCalledTimes(commissionData.length);
    expect(mockFn).toHaveBeenNthCalledWith(1, '1.23');
    expect(mockFn).toHaveBeenNthCalledWith(2, '5.68');
    expect(mockFn).toHaveBeenNthCalledWith(3, '0.12');
    expect(mockFn).toHaveBeenNthCalledWith(4, 'error');

    mockFn.mockRestore();
  });
});
