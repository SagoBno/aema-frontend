import cn from 'classnames';
import Arrow from 'icons/Arrow';

function Record({
  record, isSelected, isLoading, onSelectRecord,
}) {
  return (
    <li>
      <button
        className={cn('border-b p-4 flex items-center justify-between font-light', {
          'bg-secondary-100/30 font-normal': isSelected && !isLoading,
          'cursor-pointer hover:bg-secondary-100/30': !isLoading,
        })}
        type="button"
        onClick={() => onSelectRecord(record)}
      >
        <p
          className={cn('capitalize', {
            'animate-pulse bg-secondary-100 rounded-lg w-56 h-6 block': isLoading,
          })}
        >
          {record}
        </p>
        <Arrow
          className={cn('ml-2 text-secondary-300', {
            'rotate-90': isSelected,
            hidden: isLoading,
          })}
        />
      </button>
    </li>
  );
}

export default Record;
