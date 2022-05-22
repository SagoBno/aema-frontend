import Link from 'next/link';

import routes from 'config/routes';
import NoReports from 'illustrations/NoReports';

function NoReportsYet() {
  return (
    <div className="flex flex-col items-center text-center">
      <NoReports />
      <p className="mt-10 text-2xl">No tienes reportes aun.</p>
      <Link href={routes.INVENTORY}>
        <a className="c_primary-button max-w-fit mt-5">Iniciar</a>
      </Link>
    </div>
  );
}

export default NoReportsYet;
