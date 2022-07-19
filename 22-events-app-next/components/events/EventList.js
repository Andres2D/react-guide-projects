import EventItem from "./EventItem";

const EventList = props => {
  const {items} = props;
  return (
    <ul>
      {items.map(item => <EventItem
        id={item.id}
        key={item.id}
        title={item.title}
        location={item.location}
        date={item.date}
        image={item.image}
      />)}
    </ul>
  );
};

export default EventList;
