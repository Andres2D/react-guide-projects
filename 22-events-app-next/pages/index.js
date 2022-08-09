import Head from 'next/head';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-util';

const MainPage = props => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name='description' content='Find a lot of great event to allow you to evolve...' />
      </Head>
      <EventList items={props.events} />
    </div>
  )
};

export const getStaticProps = async() => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default MainPage;
