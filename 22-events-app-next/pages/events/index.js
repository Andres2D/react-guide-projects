import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../helpers/api-util';

const EventsPage = props => {

  const { events } = props;
  const router = useRouter();

  const searchHandler = ({year, month}) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
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
