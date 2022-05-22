import History from 'components/History';
import NoReportsYet from 'components/@common/NoReportsYet';
import LayoutWithNavbar from 'components/@layouts/LayoutWithNavbar';

import useUserAnswers from 'hooks/useUserAnswers';

function HistoryPage() {
  const {
    data: { userAnswers },
    isLoading,
  } = useUserAnswers();

  if (!isLoading && !userAnswers.length) {
    return (
      <main className="w-full h-full bg-general-bg flex items-center justify-center">
        <NoReportsYet />
      </main>
    );
  }

  return (
    <main className="w-full h-full bg-general-bg">
      <History userAnswers={userAnswers} isLoading={isLoading} />
    </main>
  );
}

HistoryPage.getLayout = (page) => <LayoutWithNavbar>{page}</LayoutWithNavbar>;

HistoryPage.meta = {
  loginRequired: true,
};

export default HistoryPage;
