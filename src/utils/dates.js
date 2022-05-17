import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';

import 'dayjs/locale/es';

dayjs.locale('es');

dayjs.extend(utc);
dayjs.extend(relativeTime);

export const formatDate = (date, format = 'ddd, MMM D, YYYY h:mm A') => dayjs(date).format(format);

export const getDiffInWeeks = (dateA, dateB) => dayjs.utc(dateA).diff(dayjs.utc(dateB), 'week');

export const addWeeks = (date, weeksToAdd) => dayjs(date).add(weeksToAdd, 'week');

export const timeToNow = (futureDate) => dayjs(futureDate).fromNow();

export const addDays = (date, daysToAdd) => dayjs(date).add(daysToAdd, 'day');

export {
  dayjs,
};
