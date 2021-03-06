import cn from 'classnames';
import usePsychologists from 'hooks/usePsychologists';

import LayoutWithNavbar from 'components/@layouts/LayoutWithNavbar';

const columns = [
  {
    value: 'Correo electrónico',
    key: 'email',
  },
  {
    value: 'Contacto',
    key: 'phoneNumber',
  },
  {
    value: 'Web',
    key: 'page',
  },
  {
    value: 'Dirección',
    key: 'address',
  },
  {
    value: 'Ciudad',
    key: 'city',
  },
];

function SpecialistsPage() {
  const {
    data: { psychologists },
    isLoading,
  } = usePsychologists();

  const renderField = (psychologist, key) => {
    if (key === 'page' && psychologist[key]) {
      return (
        <a
          href={psychologist[key]}
          rel="noopener noreferrer nofollow"
          target="_blank"
          className="truncate block"
        >
          {psychologist[key]}
        </a>
      );
    }

    return <p className="truncate">{psychologist[key]}</p>;
  };

  return (
    <main className="bg-transparent h-full overflow-y-auto">
      <h1 className="text-center text-3xl font-bold mt-5">Psicólogos</h1>
      <p className="text-center text-secondary-300 font-light text-sm md:text-base">
        Datos de contacto de psicólogos en Colombia
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-10 mt-10 pb-5 overflow-y-auto">
        {(isLoading ? Array(6).fill({}) : psychologists).map(
          (psychologist, psychologistIndex) => (
            <li
              ley={`${psychologist.name}-${psychologistIndex}`}
              className="shadow-lg bg-general-bg rounded-lg"
            >
              <ul className="pb-4 grid grid-flow-row gap-2">
                <div className="rounded-t-lg text-center py-4 px-2 border-b bg-secondary-100/20">
                  <p className={cn('text-sm md:text-base font-bold', {
                    'animate-pulse bg-secondary-100 rounded-lg w-3/5 h-5 block mx-auto': isLoading,
                  })}
                  >
                    {psychologist.name}
                  </p>
                </div>
                {columns.map(
                  ({ key, value }) => (
                    <li className="grid grid-cols-3 gap-4 text-sm font-light px-4">
                      <span className="font-bold ml-1">{value}</span>
                      <div
                        className={cn('col-span-2', {
                          'animate-pulse bg-secondary-100 rounded-lg w-full h-5 block': isLoading,
                        })}
                      >
                        {renderField(psychologist, key)}
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </li>
          ),
        )}
      </ul>
    </main>
  );
}

SpecialistsPage.getLayout = (page) => (
  <LayoutWithNavbar>{page}</LayoutWithNavbar>
);

SpecialistsPage.meta = {
  loginRequired: true,
};

export default SpecialistsPage;
