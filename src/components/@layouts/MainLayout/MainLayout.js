import Header from "./Header";

const MainLayout = ({ children }) => (
  <div className="max-w-screen min-h-screen grid grid-rows-mainLayout">
    <Header />
    {children}
  </div>
);

export default MainLayout;
