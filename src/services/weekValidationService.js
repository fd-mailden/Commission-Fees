import moment from 'moment/moment';

class _weekValidationService {
  getIsThisWeek(previousDate, currentDate) {
    return moment(previousDate).isoWeek() === moment(currentDate).isoWeek();
  }
}

export const weekValidationService = new _weekValidationService();
