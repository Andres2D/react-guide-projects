import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../dummy_data';

const EventsPage = () => {

  const events = getAllEvents();
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

export default EventsPage;
