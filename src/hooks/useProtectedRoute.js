import { useRouter } from "next/router";

import useUser from "./useUser";

const useProtectedRoute = () => {
  const user = useUser();
  const { push } = useRouter();

  if (!user) {
    return push("/login");
  }

  return user;
};

export default useProtectedRoute;