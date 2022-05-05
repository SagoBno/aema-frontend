/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import cn from 'classnames';
import React from 'react';
import Arrow from '../../../icons/Arrow';

function RecordList({ records = [], selectedRecord, onSelectRecord }) {
  return (
    <>
      <p className="font-bold pb-4 text-lg p-4">Registros</p>
      <ul className="w-fit h-full overflow-y-auto">
        {records.map((record) => {
          const isSelected = record === selectedRecord;
          return (
            <li
              key={record}
              className={cn(
                'border-b p-4 cursor-pointer hover:bg-secondary-100/30 flex items-center justify-between font-light',
                {
                  'bg-secondary-100/30 font-normal': isSelected,
                },
              )}
              onClick={() => onSelectRecord(record)}
            >
              <p className="capitalize">{record}</p>
              <Arrow
                className={cn('ml-2 text-secondary-300', {
                  'rotate-90': isSelected,
                })}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default RecordList;
