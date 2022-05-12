import History from 'components/History';
import LayoutWithNavbar from 'components/@layouts/LayoutWithNavbar';

import useUserAnswers from 'hooks/useUserAnswers';

import NoRecordsYet from 'components/@common/NoRecordsYet/NoRecordsYet';

function HistoryPage() {
  const {
    data: { userAnswers },
    isLoading,
  } = useUserAnswers();

  if (!isLoading && !userAnswers.length) {
    return (
      <main className="w-full h-full bg-general-bg flex items-center justify-center">
        <NoRecordsYet />
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
