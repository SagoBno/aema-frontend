import { useRouter } from 'next/router';

import routes from 'config/routes';

import useUser from 'hooks/useUser';
import useAvailability from 'hooks/useAvailability';

import BeckCard from 'components/BeckCard';
import NotAvailable from 'components/@common/NotAvailable';
import LayoutWithNavbar from 'components/@layouts/LayoutWithNavbar';
import StartBeck from 'components/@common/StartBeck';

function BeckPage() {
  useUser({ ifNotLoggedRedirectTo: routes.LOGIN });
  const { query } = useRouter();
  const { availability, nextAvailableDate } = useAvailability();
  if (availability === false) {
    return (
      <section className="flex justify-center items-center">
        <NotAvailable nextAvailableDate={nextAvailableDate} />
      </section>
    );
  }

  if (!query.page) {
    return (
      <div className="flex justify-center items-center">
        <StartBeck />
      </div>
    );
  }

  return <BeckCard />;
}

BeckPage.getLayout = (page) => <LayoutWithNavbar>{page}</LayoutWithNavbar>;

export default BeckPage;
