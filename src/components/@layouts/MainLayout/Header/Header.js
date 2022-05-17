import React from 'react';
import Link from 'next/link';

import routes from '../../../../config/routes';
import useUser from '../../../../hooks/useUser';

function Header() {
  const { logout } = useUser();
  return (
    <header className="py-4 fixed top-0 left-0 right-0 z-10 bg-primary-400 border-b">
      <div className="c_container flex justify-between items-center">
        <div className="text-2xl font-bold text-secondary-0">
          <Link href={routes.HOME}>
            <a>AEMA</a>
          </Link>
        </div>
        <nav>
          <ul className="grid grid-flow-col gap-4">
            <li>
              <Link href={routes.PROFILE}>
                <a className="text-secondary-0 font-bold hover:underline">
                  Perfil
                </a>
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={logout}
                className="text-secondary-0 font-bold hover:underline"
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
