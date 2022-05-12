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
    <div className="md:flex h-full">
      <section className="h-1/3  md:h-full overflow-hidden border-b-2 md:border-r min-w-max">
        <RecordList
          records={records}
          isLoading={isLoading}
          selectedRecord={selectedRecord}
          onSelectRecord={onSelectRecord}
          onDownloadHistory={onDownloadHistory}
        />
      </section>
      {selectedRecord && (
        <section className="h-2/3 md:h-full overflow-hidden md:border-r">
          <UserAnswersList
            onDownloadUserAnswers={onDownloadUserAnswers}
            userAnswers={history[selectedRecord]}
          />
        </section>
      )}
      {!selectedRecord && !!userAnswers?.length && (
        <section className="h-2/3 md:h-full mx-auto flex items-center justify-center">
          <DownloadHistory onDownloadHistory={onDownloadHistory} />
        </section>
      )}
    </div>
  );
}

export default History;
