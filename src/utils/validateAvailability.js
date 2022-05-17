import { getDiffInWeeks } from './dates';

const validateAvailability = (lastSubmitDate) => {
  const userHasNoRecords = !lastSubmitDate;
  if (userHasNoRecords) return true;
  return getDiffInWeeks(new Date(), lastSubmitDate) >= 2;
};

export default validateAvailability;
