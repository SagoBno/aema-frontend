import { getDiffInWeeks } from './dates';

const validateAvailability = (lastSubmitDate) => getDiffInWeeks(new Date(), lastSubmitDate) >= 2;

export default validateAvailability;
