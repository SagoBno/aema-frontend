import React from "react";

import routes from "config/routes";
import useUser from "hooks/useUser";
import LayoutWithNavbar from "components/@layouts/LayoutWithNavbar";

const HomePage = () => {
  useUser({ ifNotLoggedRedirectTo: routes.LOGIN });

  return "Hola";
};

HomePage.getLayout = (page) => <LayoutWithNavbar>{page}</LayoutWithNavbar>;

export default HomePage;
