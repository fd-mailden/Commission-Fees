import { describe, expect, test, jest, afterEach } from '@jest/globals';
import { axios } from '../src/config/axios';
import { BaseHttpServices } from '../src/services/baseHTTPServise';

jest.mock('../src/config/axios');

describe('BaseHttpServices', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should return response if successful', async () => {
    const mockResponse = {
      data: {
        percents: 0.3,
        min: {
          amount: 0.5,
          currency: 'EUR',
        },
      },
    };
    axios.get.mockResolvedValueOnce(mockResponse);
    const baseHttpServices = new BaseHttpServices();
    const response = await baseHttpServices.get('/cash-in');

    expect(response).toEqual(mockResponse);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/cash-in', undefined);
  });
});
