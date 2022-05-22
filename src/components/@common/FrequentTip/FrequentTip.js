import cn from 'classnames';
import toast from 'react-hot-toast';

function FrequentTip({ visible, id, tip }) {
  return (
    <div
      className={cn(
        'text-sm max-w-md w-full bg-blue-200/80 backdrop-blur-md shadow-lg rounded-lg pointer-events-auto flex justify-between ring-1 ring-secondary-400 ring-opacity-5',
        {
          'animate-enter': visible,
          'animate-leave': !visible,
        },
      )}
    >
      <div className="p-5">
        <p>{tip}</p>
      </div>
      <div className="flex border-l border-secondary-100/50">
        <button
          type="button"
          onClick={() => toast.dismiss(id)}
          className="w-[77px] border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-blue-500 hover:text-primary-400 focus:outline-none focus:ring-2 focus:text-primary-400"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default FrequentTip;
