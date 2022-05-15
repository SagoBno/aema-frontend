import useTip from 'hooks/useTip';

import LayoutWithNavbar from 'components/@layouts/LayoutWithNavbar';

function TipPage() {
  const { isLoading, rangeLevel } = useTip();

  return (
    <main className="w-full h-full bg-general-bg overflow-hidden flex flex-col items-center justify-center p-5">
      <div className="overflow-y-auto text-center w-full">
        {isLoading ? (
          <div className="h-[170px] w-[170px] animate-pulse bg-secondary-100 rounded-full mx-auto" />
        ) : <div className="min-h-[250px] min-w-[250px] w-[250px] h-[250px] mx-auto">{rangeLevel?.image}</div>}
        <h1 className="text-6xl text-primary-500 mt-3">TIP</h1>
        <div className="max-w-lg text-center text-xl mt-5 mx-auto">
          {isLoading ? (
            <div className="flex flex-wrap max-w-[300px] mx-auto">
              {[300, 100, 200, 100, 100, 100, 250, 50, 50, 200, 50, 300]
                .map((width) => (
                  <div
                    className="mt-2 ml-2 rounded-lg h-4 block animate-pulse bg-secondary-100"
                    style={{ width: width - 8 }}
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

TipPage.getLayout = (page) => <LayoutWithNavbar>{page}</LayoutWithNavbar>;

TipPage.meta = {
  loginRequired: true,
};

export default TipPage;
