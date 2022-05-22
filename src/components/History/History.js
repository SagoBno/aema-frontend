import React from 'react';

import useHistory from './useHistory';
import ReportList from './ReportList';
import UserAnswersList from './UserAnswersList';
import DownloadHistory from './DownloadHistory';

function History({ userAnswers, isLoading }) {
  const [
    { history, reports, selectedReport },
    { onSelectReport, onDownloadUserAnswers, onDownloadHistory },
  ] = useHistory({
    userAnswers,
  });

  return (
    <div className="md:flex h-full">
      <section className="h-1/3  md:h-full overflow-hidden border-b-2 md:border-r min-w-max">
        <ReportList
          reports={reports}
          isLoading={isLoading}
          selectedReport={selectedReport}
          onSelectReport={onSelectReport}
          onDownloadHistory={onDownloadHistory}
        />
      </section>
      {selectedReport && (
        <section className="h-2/3 md:h-full overflow-hidden md:border-r">
          <UserAnswersList
            onDownloadUserAnswers={onDownloadUserAnswers}
            userAnswers={history[selectedReport]}
          />
        </section>
      )}
      {!selectedReport && !!userAnswers?.length && (
        <section className="h-2/3 md:h-full mx-auto flex items-center justify-center">
          <DownloadHistory onDownloadHistory={onDownloadHistory} />
        </section>
      )}
    </div>
  );
}

export default History;
