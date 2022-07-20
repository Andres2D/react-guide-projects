import { getAllEvents } from '../../dummy_data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

const EventsPage = () => {

  const events = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  )
};

export default EventsPage;
