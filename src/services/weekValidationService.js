import { getISOWeek } from 'date-fns';

class _weekValidationService {
  getIsThisWeek(previousDate, currentDate) {
    const previous = new Date(previousDate);
    const current = new Date(currentDate);
    return getISOWeek(previous) === getISOWeek(current);
  }
}

export const weekValidationService = new _weekValidationService();
