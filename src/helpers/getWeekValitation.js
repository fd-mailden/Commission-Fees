import moment from 'moment';

export const getIsCurrentWeek = (previousDate, currentDate) =>
  moment(previousDate).isoWeek() === moment(currentDate).isoWeek()
    ? true
    : false;
