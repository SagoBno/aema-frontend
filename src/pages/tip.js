import routes from 'config/routes';

import useTip from 'hooks/useTip';
import useUser from 'hooks/useUser';

import LayoutWithNavbar from 'components/@layouts/LayoutWithNavbar';

function BeckPage() {
  useUser({ ifNotLoggedRedirectTo: routes.LOGIN });

  const { isLoading, rangeLevel } = useTip();

  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        {isLoading ? (
          <div className="h-[170px] w-[170px] animate-pulse bg-secondary-100 rounded-full" />
        ) : rangeLevel?.image}
        <h1 className="text-6xl text-primary-500 mt-3">TIP</h1>
        <div className="max-w-lg text-center text-xl mt-5">
          {isLoading ? (
            <div className="flex flex-wrap">
              {[512, 345, 150, 150, 345, 512, 160, 165, 160, 512, 160, 165, 160]
                .map((width) => (
                  <div
                    className="mt-2 ml-2 rounded-lg h-4 block animate-pulse bg-secondary-100"
                    style={{ width }}
                  />
                ))}
            </div>
          ) : (
            rangeLevel?.tip
          )}
        </div>
      </div>
    </main>
  );
}

BeckPage.getLayout = (page) => <LayoutWithNavbar>{page}</LayoutWithNavbar>;

export default BeckPage;
