import usePsychologists from 'hooks/usePsychologists';

import LayoutWithNavbar from 'components/@layouts/LayoutWithNavbar';
import cn from 'classnames';

const columns = [
  {
    value: 'Nombre',
    key: 'name',
  },
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
          className="underline"
        >
          Visitar
        </a>
      );
    }

    return psychologist[key];
  };

  return (
    <main className="overflow-auto">
      <ul className="bg-secondary-100/20 grid grid-cols-6">
        {columns.map(({ value }) => (
          <li className="p-4 text-xs uppercase font-bold">{value}</li>
        ))}
      </ul>
      <ul className="grid grid-flow-row">
        {psychologists.map((psychologist) => (
          <ul className="grid grid-cols-6">
            {columns.map(({ key }) => (
              <li
                className={cn('p-4 text-sm font-light', {
                  'text-ellipsis overflow-hidden': key === 'page',
                })}
              >
                {renderField(psychologist, key)}
              </li>
            ))}
          </ul>
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
