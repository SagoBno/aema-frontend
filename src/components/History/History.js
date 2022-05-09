import React from 'react';

import useHistory from './useHistory';
import RecordList from './RecordList';
import UserAnswersList from './UserAnswersList';
import DownloadHistory from './DownloadHistory';

function History({ userAnswers, isLoading }) {
  const [
    { history, records, selectedRecord },
    { onSelectRecord, onDownloadUserAnswers, onDownloadHistory },
  ] = useHistory({
    userAnswers,
  });

  return (
    <>
      <section className="h-full overflow-hidden border-r">
        <RecordList
          records={records}
          isLoading={isLoading}
          selectedRecord={selectedRecord}
          onSelectRecord={onSelectRecord}
          onDownloadHistory={onDownloadHistory}
        />
      </section>
      {selectedRecord && (
        <section className="h-full overflow-hidden">
          <UserAnswersList
            onDownloadUserAnswers={onDownloadUserAnswers}
            userAnswers={history[selectedRecord]}
          />
        </section>
      )}
      {!selectedRecord && !!userAnswers?.length && (
        <section className="h-full mx-auto flex items-center justify-center">
          <DownloadHistory onDownloadHistory={onDownloadHistory} />
        </section>
      )}
    </>
  );
}

export default History;
