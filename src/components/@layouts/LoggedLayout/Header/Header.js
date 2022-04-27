import useUser from "hooks/useUser";

const Header = () => {
  const { logout } = useUser();
  return (
    <nav className="py-4">
      <div className="c_container flex justify-between items-center">
        <div className="text-2xl font-bold text-secondary-0">AEMA</div>
        <ul>
          <li>
            <button
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
};

export default Header;
