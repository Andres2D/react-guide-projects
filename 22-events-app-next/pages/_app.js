import Head from 'next/head';
import '../styles/globals.css'
import { NotificationContextProvider } from '../store/notification-context';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width'></meta>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
