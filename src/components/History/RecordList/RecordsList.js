import Download from 'icons/Download';

import Record from './Record';

function RecordList({
  records,
  selectedRecord,
  onSelectRecord,
  isLoading,
  onDownloadHistory,
}) {
  const recordsToShow = isLoading ? new Array(3).fill(null) : records;

  return (
    <>
      <p className="font-bold pb-4 text-lg p-4 flex items-center">
        Registros
        {selectedRecord && (
          <button
            type="button"
            title="Descargar respuestas"
            onClick={onDownloadHistory}
          >
            <Download className="ml-2 cursor-pointer" />
          </button>
        )}
      </p>
      <ul className="w-fit h-full overflow-y-auto">
        {recordsToShow.map((record, index) => {
          const isSelected = record === selectedRecord;
          return (
            <Record
              key={record ?? `record-${index}`}
              onSelectRecord={onSelectRecord}
              isLoading={isLoading}
              isSelected={isSelected}
              record={record}
            />
          );
        })}
      </ul>
    </>
  );
}

export default RecordList;
