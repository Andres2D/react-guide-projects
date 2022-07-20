import { getAllEvents } from '../../dummy_data';
import EventList from '../../components/events/EventList';

const EventsPage = () => {

  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  )
};

export default EventsPage;
