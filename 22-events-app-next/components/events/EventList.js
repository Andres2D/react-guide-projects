import EventItem from "./EventItem";

const EventList = props => {
  const {items} = props;
  return (
    <ul>
      {items.map(item => <EventItem />)}
    </ul>
  );
};

export default EventList;
