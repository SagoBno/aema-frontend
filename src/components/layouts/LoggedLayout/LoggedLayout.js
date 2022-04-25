import Header from "./Header";

const LoggedLayout = ({ children }) => {
  return (
    <div className="min-h-[100vh] w-[100vw]">
      <Header />
      {children}
    </div>
  );
};

export default LoggedLayout;
