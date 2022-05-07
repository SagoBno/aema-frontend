import React from 'react';
import { Toaster } from 'react-hot-toast';

import 'styles/globals.css';
import 'styles/components.css';
import routes from 'config/routes';
import useUser from 'hooks/useUser';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const { loginRequired } = Component.meta || {};

  useUser({ ...(loginRequired ? { ifNotLoggedRedirectTo: routes.LOGIN } : {}) });

  return getLayout(
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder />
    </>,
  );
}

export default MyApp;
