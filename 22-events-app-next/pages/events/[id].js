import { useRouter } from 'next/router';
import EventSummary from '../../components/event-detail/event-summary';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import { getEventById } from '../../dummy_data';

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.id;
  const event = getEventById(eventId);

  if(!event) {
    return <p>No event found!</p>
  }

  return (
    <>
      <EventSummary
        title={event.title}
      />
      <EventLogistics 
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
};

export default EventDetailPage;
