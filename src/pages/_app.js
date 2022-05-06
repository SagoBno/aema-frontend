import React from 'react';
import { Toaster } from 'react-hot-toast';

import 'styles/globals.css';
import 'styles/components.css';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder />
    </>,
  );
}

export default MyApp;
