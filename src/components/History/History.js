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
    <main className="grid grid-cols-mainLayout h-[87vh]">
      <section className="h-[inherit] border-r">
        <RecordList
          records={records}
          isLoading={isLoading}
          selectedRecord={selectedRecord}
          onSelectRecord={onSelectRecord}
          onDownloadHistory={onDownloadHistory}
        />
      </section>
      {selectedRecord && (
      <section className="h-[inherit]">
        <UserAnswersList
          onDownloadUserAnswers={onDownloadUserAnswers}
          userAnswers={history[selectedRecord]}
        />
      </section>
      )}

      {!selectedRecord && !!userAnswers?.length && (
      <section className="flex items-center justify-center">
        <DownloadHistory onDownloadHistory={onDownloadHistory} />
      </section>
      )}
    </main>
  );
}

export default History;
