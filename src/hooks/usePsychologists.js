import useSWR from 'swr';

import { getPsychologists } from 'services/psychologists';

const DEFAULT_DATA = {
  psychologists: [],
};

const SWR_KEY = '/psychologists';

const usePsychologists = () => {
  const { data, error } = useSWR(SWR_KEY, () => getPsychologists());

  const isLoading = !error && !data;

  return {
    data: data ?? DEFAULT_DATA,
    isLoading,
    isError: error,
  };
};

export default usePsychologists;
