import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../dummy_data';

const FilteredEventsPage = () => {

  const router = useRouter();

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
      return (
        <>
          <ErrorAlert>
            <p className='center'>Invalid filter, please adjust your values!</p>
          </ErrorAlert>
          <div className='center'>
            <Button link='/events'>Show All Events</Button>
          </div>
        </>
      )
    }

    const events = getFilteredEvents({year: +year, month: +month});

    if(!events || events.length === 0) {
      return (
        <>
          <ErrorAlert>
            <p className='center'>No events Found for the chosen filter!</p>
          </ErrorAlert>
          <div className='center'>
            <Button link='/events'>Show All Events</Button>
          </div>
        </>
      );
    }

    const date = new Date(year, month - 1);

    return (
      <div>
        <ResultsTitle date={date} />
        <EventList items={events} />
      </div>
    )
  }

};

export default FilteredEventsPage;
