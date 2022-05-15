import useTip from 'hooks/useTip';

import LayoutWithNavbar from 'components/@layouts/LayoutWithNavbar';

function TipPage() {
  const { isLoading, rangeLevel } = useTip();

  return (
    <main className="w-full h-full bg-general-bg overflow-y-auto flex flex-col items-center justify-center py-5">
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
    </main>
  );
}

TipPage.getLayout = (page) => <LayoutWithNavbar>{page}</LayoutWithNavbar>;

TipPage.meta = {
  loginRequired: true,
};

export default TipPage;
