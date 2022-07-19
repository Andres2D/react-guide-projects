import EventItem from "./EventItem";
import styles from './EventList.module.css';

const EventList = props => {
  const {items} = props;
  return (
    <ul className={styles.list}>
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
