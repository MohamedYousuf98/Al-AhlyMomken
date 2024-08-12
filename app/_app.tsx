// pages/_app.tsx

import React from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Loader from '../components/Loader'; // Adjust path as per your project structure
import '../styles/globals.css'; // Example: Global styles

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const startLoading = () => setLoading(true);
    const endLoading = () => setLoading(false);

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', endLoading);
    Router.events.on('routeChangeError', endLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', endLoading);
      Router.events.off('routeChangeError', endLoading);
    };
  }, []);

  return (
    <>
      {loading && <Loader />} {/* Show loader component when loading state is true */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
