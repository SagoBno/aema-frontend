import { Toaster } from "react-hot-toast";
import "styles/globals.css";
import "styles/components.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}

export default MyApp;
