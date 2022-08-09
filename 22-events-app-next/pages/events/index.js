import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../helpers/api-util';
import Head from 'next/head';

const EventsPage = props => {

  const { events } = props;
  const router = useRouter();

  const searchHandler = ({year, month}) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name='description' content='Find a lot of great event to allow you to evolve...' />
      </Head>
      <EventsSearch onSearch={searchHandler} />
      <EventList items={events} />
    </>
  )
};

export const getStaticProps = async() => {
  const events = await getAllEvents();

  return {
    props: {
      events
    },
    revalidate: 60
  }
};

export default EventsPage;
