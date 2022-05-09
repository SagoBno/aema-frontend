import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import routes from 'config/routes';
import StartBeck from 'icons/StartBeck';
import RecordBook from 'icons/RecordBook';
import Specialists from 'icons/Specialists';

const nav = [
  {
    route: routes.HOME,
    title: 'Historial',
    icon: <RecordBook />,
  },
  {
    route: routes.INVENTORY,
    title: 'Formulario',
    icon: <StartBeck />,
  },
  {
    route: routes.SPECIALISTS,
    title: 'Especialistas',
    icon: <Specialists />,
  },
];

function Navbar({ className }) {
  const { pathname } = useRouter();
  return (
    <nav
      className={cn(
        'p-4 border-t md:border-t-0 md:border-r border-secondary-100 fixed left-0 bottom-0 right-0 md:right-[unset] md:top-[64px] z-10 bg-general-bg',
        { className: !!className?.length > 0 },
      )}
    >
      <ul className="flex justify-around md:block">
        {nav.map(({ icon, route, title }) => (
          <li key={route} title={title}>
            <Link href={route}>
              <a
                className={cn(
                  'cursor-pointer hover:bg-secondary-100/30 p-4 rounded-lg text-secondary-400 inline-block',
                  {
                    'text-primary-400 hover:bg-transparent': pathname === route,
                  },
                )}
              >
                {icon}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
