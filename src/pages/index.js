import React from 'react';

import useUser from '../hooks/useUser';
import useUserAnswers from '../hooks/useUserAnswers';
import routes from '../config/routes';
import LayoutWithNavbar from '../components/@layouts/LayoutWithNavbar';
import History from '../components/History';

function HistoryPage() {
  useUser({ ifNotLoggedRedirectTo: routes.LOGIN });
  const {
    data: { userAnswers },
  } = useUserAnswers();

  return <History userAnswers={userAnswers} />;
}

HistoryPage.getLayout = (page) => <LayoutWithNavbar>{page}</LayoutWithNavbar>;

export default HistoryPage;
