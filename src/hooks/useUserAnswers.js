import useSWR from 'swr';

import { getByUserId } from '../services/user-answers';

const LOGIN_KEY = '/user-answers/me';

const DEFAULT_DATA = {
  userAnswers: []
}

const useUserAnswers = () => {
  const { data, error } = useSWR(LOGIN_KEY, getByUserId);

  const isLoading = !error && !data;

  return {
    data: data ?? DEFAULT_DATA,
    isLoading,
    isError: error,
  };
};

export default useUserAnswers;
