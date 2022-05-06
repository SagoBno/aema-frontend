import { useEffect, useState } from 'react';

import { addWeeks } from 'utils/dates';
import validateAvailability from 'utils/validateAvailability';

import useUserAnswers from './useUserAnswers';

const useAvailability = () => {
  const {
    data: { userAnswers },
    isLoading: userAnswersAreLoading,
  } = useUserAnswers();

  const [availability, setAvailability] = useState();
  const [lastUserAnswer] = userAnswers || [];

  useEffect(() => {
    if (!userAnswersAreLoading) {
      setAvailability(validateAvailability(lastUserAnswer?.createdAt));
    }
  }, [lastUserAnswer, userAnswersAreLoading]);

  return {
    availability: availability || !lastUserAnswer,
    lastSubmitDate: lastUserAnswer?.createdAt,
    nextAvailableDate: lastUserAnswer?.createdAt ? addWeeks(lastUserAnswer.createdAt, 2) : null,
  };
};

export default useAvailability;
