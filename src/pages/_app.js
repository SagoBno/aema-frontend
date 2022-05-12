import React from 'react';
import { Toaster } from 'react-hot-toast';

import 'styles/globals.css';
import 'styles/components.css';
import routes from 'config/routes';
import useUser from 'hooks/useUser';
import useFrequentTips from 'hooks/useFrequentTips';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const { loginRequired } = Component.meta || {};

  useUser({ ...(loginRequired ? { ifNotLoggedRedirectTo: routes.LOGIN } : {}) });
  useFrequentTips();

  return getLayout(
    <>
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder />
    </>,
  );
}

export default MyApp;
