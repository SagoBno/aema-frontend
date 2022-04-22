import { useEffect } from "react";
import { useRouter } from "next/router";

import { getLoginStatus } from "../services/auth";

const useUser = ({ redirectTo, redirectIfFound } = {}) => {
  const { push } = useRouter();
  const { data, error, isValidating } = getLoginStatus();
  console.log({ data, error, isValidating });
  const user = data?.user;
  const finished = Boolean(data);
  const hasUser = Boolean(user);

  useEffect(() => {
    if (!redirectTo || !finished) return;
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasUser) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && hasUser)
    ) {
      push(redirectTo);
    }
  }, [redirectTo, redirectIfFound, finished, hasUser]);

  return error ? null : user;
};

export default useUser;
