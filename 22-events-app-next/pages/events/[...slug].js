import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import { getFilteredEvents } from '../../dummy_data';

const FilteredEventsPage = () => {

  const router = useRouter();
  let events = [];
  console.log(router);

  if(!router.query.slug){
    return <p className='center'>Loading...</p>;
  }else{
    const [year, month] = router.query.slug;
    
    if(
      isNaN(+year) || 
      isNaN(+month) || 
      +year > 2030 || 
      +year < 2021 || 
      +month < 1 || 
      +month > 12
    ) {
      return <p className='center'>Invalid filter, please adjust your values!</p>
    }

    events = getFilteredEvents({year: +year, month: +month});

    if(!events || events.length === 0) {
      return <p className='center'>No events Found for the chosen filter!</p>;
    }
  }

  return (
    <div>
      <EventList items={events} />
    </div>
  )
};

export default FilteredEventsPage;
