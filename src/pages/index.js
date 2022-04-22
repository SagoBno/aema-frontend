import useUser from "../hooks/useUser";

const HomePage = () => {
  useUser({ redirectIfMissing: "/login" });
  return <div>Welcome to Next.js!</div>;
};

export default HomePage;
