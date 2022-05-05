import useSWR from 'swr';
import Router from 'next/router';
import { useEffect } from 'react';

import { getLoginStatus, logout as logoutService } from '../services/auth';

const LOGIN_KEY = '/auth/login';

const useUser = ({ ifLoggedRedirectTo, ifNotLoggedRedirectTo } = {}) => {
  const { data: user, error, mutate } = useSWR(LOGIN_KEY, getLoginStatus);

  const isLoading = !error && !user;

  useEffect(() => {
    if (!error && ifLoggedRedirectTo) {
      Router.push(ifLoggedRedirectTo ?? Router.query.prev);
    }
    if (error && ifNotLoggedRedirectTo) {
      Router.push(ifNotLoggedRedirectTo);
    }
  }, [error]);

  const logout = () => logoutService().then(() => mutate());

  return {
    user,
    isLoading,
    isError: error,
    logout,
  };
};

export default useUser;
