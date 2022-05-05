import React from 'react';
import Link from 'next/link';

import routes from '../../../../config/routes';
import useUser from '../../../../hooks/useUser';

function Header() {
  const { logout } = useUser();
  return (
    <nav className="py-4">
      <div className="c_container flex justify-between items-center">
        <div className="text-2xl font-bold text-secondary-0">
          <Link href={routes.HOME}>
            <a>AEMA</a>
          </Link>
        </div>
        <ul>
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
      </div>
    </nav>
  );
}

export default Header;
