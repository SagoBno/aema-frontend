import MainLayout from "components/@layouts/MainLayout";
import Navbar from "./Navbar";

const LayoutWithNavbar = ({ children }) => {
  return (
    <MainLayout>
      <div className=" bg-general-bg grid grid-cols-mainLayout relative">
        <Navbar />
        {children}
      </div>
    </MainLayout>
  );
};

export default LayoutWithNavbar;
