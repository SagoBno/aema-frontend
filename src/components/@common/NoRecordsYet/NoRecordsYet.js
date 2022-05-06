import Link from 'next/link';

import routes from 'config/routes';
import NoRecords from 'icons/NoRecords';

function NoRecordsYet() {
  return (
    <div className="flex flex-col items-center">
      <NoRecords />
      <p className="mt-10 text-2xl">No tienes registros aun.</p>
      <Link href={routes.FORM}>
        <a className="c_primary-button max-w-fit mt-5">Iniciar</a>
      </Link>
    </div>
  );
}

export default NoRecordsYet;
