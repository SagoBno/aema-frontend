import { useEffect } from "react";
import { useRouter } from "next/router";

import { getLoginStatus } from "../services/auth";

const useUser = ({ redirectIfFound, redirectIfMissing } = {}) => {
  const { push, pathname, query } = useRouter();
  const { data: user, error, isValidating } = getLoginStatus();
  
  useEffect(() => {
    if (!isValidating) {
      if (error && redirectIfMissing) {
        console.log(111);
        push(`${redirectIfMissing}?prev=${pathname}`);
      }

      if (user && (redirectIfFound || query.prev)) {
        push(redirectIfFound || query.prev);
      }
    }
  }, [redirectIfMissing, redirectIfFound, user, error]);

  return error ? null : user;
};

export default useUser;
