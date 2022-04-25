import { Toaster } from "react-hot-toast";
import "styles/globals.css";
import "styles/components.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default MyApp;
