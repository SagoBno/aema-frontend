import routes from 'config/routes';

import History from 'components/History';
import LayoutWithNavbar from 'components/@layouts/LayoutWithNavbar';

import useUser from 'hooks/useUser';
import useUserAnswers from 'hooks/useUserAnswers';

import NoRecordsYet from 'components/@common/NoRecordsYet/NoRecordsYet';

function HistoryPage() {
  useUser({ ifNotLoggedRedirectTo: routes.LOGIN });
  const {
    data: { userAnswers },
    isLoading,
  } = useUserAnswers();

  if (!isLoading && !userAnswers.length) {
    return (
      <main className="flex items-center justify-center">
        <NoRecordsYet />
      </main>
    );
  }

  return <History userAnswers={userAnswers} isLoading={isLoading} />;
}

HistoryPage.getLayout = (page) => <LayoutWithNavbar>{page}</LayoutWithNavbar>;

export default HistoryPage;
