import { BaseHttpServices } from '../services/base-http-servise';

class _CommissionApiService {
  http = new BaseHttpServices();

  async getCashInConfiguration() {
    const payload = await this.http.get('/cash-in');
    return payload.data;
  }

  async getCashOutNaturalConfiguration() {
    const payload = await this.http.get('/cash-out-natural');
    return payload.data;
  }

  async getCashOutJuridicalConfiguration() {
    const payload = await this.http.get('/cash-out-juridical');
    return payload.data;
  }
}

export const CommissionApiService = new _CommissionApiService();
