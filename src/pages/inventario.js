import { useRouter } from 'next/router';

import useAvailability from 'hooks/useAvailability';

import { getCookie } from 'utils/cookies';
import BeckCard from 'components/BeckCard';
import NotAvailable from 'components/@common/NotAvailable';
import BeckInstructions from 'components/@common/BeckInstructions';
import LayoutWithNavbar from 'components/@layouts/LayoutWithNavbar';

function BeckPage({ featureFlags }) {
  const { query } = useRouter();
  const { availability, nextAvailableDate } = useAvailability();
  const featureFlagAlwaysAvailableToSendUserAnswers = (
    featureFlags.FEATURE_FLAG_ALWAYS_AVAILABLE_TO_SEND_USERS_ANSWERS
    || getCookie('FEATURE_FLAG_ALWAYS_AVAILABLE_TO_SEND_USERS_ANSWERS') === 'true'
  );

  if (featureFlagAlwaysAvailableToSendUserAnswers === false && availability === false) {
    return (
      <main className="w-full h-full overflow-y-auto px-4 bg-general-bg flex items-center justify-center">
        <NotAvailable nextAvailableDate={nextAvailableDate} />
      </main>
    );
  }

  if (!query.page) {
    return (
      <main className="w-full bg-general-bg overflow-y-auto h-full">
        <BeckInstructions />
      </main>
    );
  }

  return (
    <main className="w-full h-full p-4 md:p-8 bg-general-bg">
      <BeckCard />
    </main>
  );
}

BeckPage.getLayout = (page) => <LayoutWithNavbar>{page}</LayoutWithNavbar>;

BeckPage.meta = {
  loginRequired: true,
};

export const getServerSideProps = ({ req }) => {
  const featureFlags = Object.keys(req.cookies).filter((cookieName) => cookieName.includes('FEATURE_FLAG'));
  return {
    props: {
      featureFlags,
    },
  };
};

export default BeckPage;
