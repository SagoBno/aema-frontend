import { useEffect, useState } from 'react';
import { getResults } from 'services/results';
import { useSWRConfig } from 'swr';
import useUserAnswers from './useUserAnswers';

const useLastResult = (specificDate) => {
  const { mutate } = useSWRConfig();
  const { data: { userAnswers }, isLoading } = useUserAnswers();
  const [lastResult, setLastResult] = useState({});
  const [lastUserAnswer] = userAnswers;

  useEffect(() => {
    const dateToCheck = specificDate ?? lastUserAnswer?.createdAt;
    if (dateToCheck) {
      mutate(`/results/me?date=${dateToCheck}`, () => getResults(dateToCheck)).then(({ results }) => {
        setLastResult(results?.[0] || {});
      });
    }
  }, [lastUserAnswer, isLoading, specificDate]);

  return {
    lastResult,
    isLoading: !lastResult?.id,
  };
};

export default useLastResult;
