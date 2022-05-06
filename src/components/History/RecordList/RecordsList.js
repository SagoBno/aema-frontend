import Record from './Record';

function RecordList({
  records, selectedRecord, onSelectRecord, isLoading,
}) {
  const recordsToShow = isLoading ? new Array(3).fill(null) : records;

  return (
    <>
      <p className="font-bold pb-4 text-lg p-4">Registros</p>
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
