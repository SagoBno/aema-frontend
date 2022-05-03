import React from "react";

import useHistory from "./useHistory";
import RecordList from "./RecordList";
import UserAnswersList from "./UserAnswersList";
import DownloadHistory from "./DownloadHistory";

const History = ({ userAnswers }) => {
  const [
    { history, selectedRecord },
    { onSelectRecord, onDownloadUserAnswers, onDownloadHistory },
  ] = useHistory({
    userAnswers,
  });

  return (
    <main className="grid grid-cols-mainLayout h-[87vh]">
      <section className="h-[inherit] border-r">
        <RecordList
          records={Object.keys(history)}
          selectedRecord={selectedRecord}
          onSelectRecord={onSelectRecord}
        />
      </section>
      {selectedRecord ? (
        <section className="h-[inherit]">
          <UserAnswersList
            onDownloadUserAnswers={onDownloadUserAnswers}
            userAnswers={history[selectedRecord]}
          />
        </section>
      ) : (
        <section className="flex items-center justify-center">
          <DownloadHistory onDownloadHistory={onDownloadHistory} />
        </section>
      )}
    </main>
  );
};

export default History;
