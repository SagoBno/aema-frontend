import useSWR from 'swr';

import { getResults } from '../services/results';

const DEFAULT_DATA = {
  results: [],
};

const useResults = (date) => {
  const LOGIN_KEY = `/results/me?date=${date}`;
  const { data, error } = useSWR(LOGIN_KEY, () => getResults(date));

  const isLoading = !error && !data;

  return {
    data: data ?? DEFAULT_DATA,
    isLoading,
    isError: error,
  };
};

export default useResults;
