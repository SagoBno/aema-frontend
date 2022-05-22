import { useRouter } from 'next/router';

import useAvailability from 'hooks/useAvailability';

import BeckCard from 'components/BeckCard';
import NotAvailable from 'components/@common/NotAvailable';
import BeckInstructions from 'components/@common/BeckInstructions';
import LayoutWithNavbar from 'components/@layouts/LayoutWithNavbar';

function BeckPage({ isAvailable }) {
  const { query } = useRouter();
  const { availability, nextAvailableDate } = useAvailability({
    serverSaysIsAvailable: isAvailable,
  });

  if (availability === false) {
    return (
      <main className="w-full h-full overflow-y-auto p-5 bg-general-bg flex items-center justify-center">
        <NotAvailable nextAvailableDate={nextAvailableDate} />
      </main>
    );
  }

  if (!query.page) {
    return (
      <main className="h-full bg-general-bg overflow-y-auto mx-auto w-fit text-center p-5">
        <BeckInstructions />
      </main>
    );
  }

  return (
    <main className="w-full h-full p-5 md:p-8 bg-general-bg">
      <BeckCard />
    </main>
  );
}

BeckPage.getLayout = (page) => <LayoutWithNavbar>{page}</LayoutWithNavbar>;

BeckPage.meta = {
  loginRequired: true,
};

export const getServerSideProps = ({ req }) => ({
  props: {
    isAvailable:
        req.cookies.FEATURE_FLAG_ALWAYS_AVAILABLE_TO_SEND_USERS_ANSWERS === 'true',
  },
});

export default BeckPage;
