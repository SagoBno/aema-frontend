import { useRouter } from 'next/router';

import useAvailability from 'hooks/useAvailability';

import BeckCard from 'components/BeckCard';
import StartBeck from 'components/@common/StartBeck';
import NotAvailable from 'components/@common/NotAvailable';
import LayoutWithNavbar from 'components/@layouts/LayoutWithNavbar';

function BeckPage() {
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

BeckPage.meta = {
  loginRequired: true,
};

export default BeckPage;
