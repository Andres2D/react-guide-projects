import Head from 'next/head';
import '../styles/globals.css'
import Notification from '../components/ui/Notification';
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
        <Notification title='Test' message='This is a test' status='error' />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
