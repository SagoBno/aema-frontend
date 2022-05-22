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
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-4 md:mx-10 mt-10 pb-5 overflow-y-auto">
        {psychologists.map((psychologist, psychologistIndex) => (
          <li
            ley={`${psychologist.name}-${psychologistIndex}`}
            className="shadow-lg bg-general-bg rounded-lg"
          >
            <ul className="pb-4 grid grid-flow-row gap-2">
              <p className="text-center py-4 px-2 border-b text-sm md:text-base font-bold bg-secondary-100/20">{psychologist.name}</p>
              {columns.map(({ key, value }) => psychologist[key] && (

                <li className="grid grid-cols-3 gap-4 text-sm font-light px-4">
                  <span className="font-bold ml-1">{value}</span>
                  <div className="col-span-2">
                    {renderField(psychologist, key)}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
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
