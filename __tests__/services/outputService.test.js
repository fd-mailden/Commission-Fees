import { describe, expect, test, jest } from '@jest/globals';
import { outputService } from '../../src/services/outputService';

describe('outputService', () => {
  test('should log formatted commission data to the console', () => {
    const commissionData = [1.23456, 5.6789, 0.123];

    const mockFn = jest.spyOn(console, 'log').mockImplementation(() => {});

    outputService.outputInConsole(commissionData);

    expect(mockFn).toHaveBeenCalledTimes(commissionData.length);
    expect(mockFn).toHaveBeenNthCalledWith(1, '1.23');
    expect(mockFn).toHaveBeenNthCalledWith(2, '5.68');
    expect(mockFn).toHaveBeenNthCalledWith(3, '0.12');

    mockFn.mockRestore();
  });
});
