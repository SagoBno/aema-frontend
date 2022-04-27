import React from "react";

import routes from "config/routes";
import useUser from "hooks/useUser";
import BeckCard from "components/BeckCard";
import LoggedLayout from "components/@layouts/LoggedLayout";

const BeckPage = () => {
  useUser({ ifNotLoggedRedirectTo: routes.LOGIN });

  return (
    <LoggedLayout>
      <BeckCard />
    </LoggedLayout>
  );
};

export default BeckPage;
