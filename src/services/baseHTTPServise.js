import { axios } from '../config/axios';

export class BaseHttpServices {
  async get(url, config) {
    try {
      const response = await axios.get(url, config);
      return response;
    } catch (e) {
      console.log(e.code);
    }
  }
}
