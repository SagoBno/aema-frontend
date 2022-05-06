import NotAvailableIllustration from 'illustrations/NotAvailable';
import { formatDate, timeToNow } from 'utils/dates';

function NotAvailable({ nextAvailableDate }) {
  return (
    <div className="flex flex-col items-center">
      <NotAvailableIllustration />
      <div className="max-w-lg text-center">
        <p className="text-3xl">⚠️ Aún no puedes llenar el inventario ⚠️</p>
        <p className="text-secondary-200 font-light text-base">
          Que bueno que constantemente quieras validar, sin embargo, para
          que sea efectivo lo debes realizar cada
          {' '}
          <span className="underline">dos semanas</span>
          .
        </p>
        <p className="text-xl text-primary-500 mt-5">
          Podrás continuar
          {' '}
          <span className="font-bold ">{timeToNow(nextAvailableDate)}</span>
          {' '}
          desde el día
          {' '}
          <span className="font-bold ">{formatDate(nextAvailableDate, 'dddd DD [de] MMMM [a las] h:mm A')}</span>
          .
        </p>
      </div>
    </div>
  );
}

export default NotAvailable;
