import React from "react";

import routes from "config/routes";
import useUser from "hooks/useUser";
import LoggedLayout from "components/@layouts/LoggedLayout";

const HomePage = () => {
  useUser({ ifNotLoggedRedirectTo: routes.LOGIN });

  return (
    <LoggedLayout>Dashboard will be here. go to /beck to see form</LoggedLayout>
  );
};

export default HomePage;
