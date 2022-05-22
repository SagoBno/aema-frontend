import { getDiffInWeeks } from './dates';

const validateAvailability = (lastSubmitDate) => {
  const userHasNoReports = !lastSubmitDate;
  if (userHasNoReports) return true;
  return getDiffInWeeks(new Date(), lastSubmitDate) >= 2;
};

export default validateAvailability;
