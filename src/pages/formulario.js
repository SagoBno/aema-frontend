import React from 'react';

import routes from '../config/routes';
import useUser from '../hooks/useUser';
import BeckCard from '../components/BeckCard';
import LayoutWithNavbar from '../components/@layouts/LayoutWithNavbar';

function BeckPage() {
  useUser({ ifNotLoggedRedirectTo: routes.LOGIN });

  return <BeckCard />;
}

BeckPage.getLayout = (page) => <LayoutWithNavbar>{page}</LayoutWithNavbar>;

export default BeckPage;
