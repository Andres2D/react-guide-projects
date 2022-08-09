import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../helpers/api-util';

const FilteredEventsPage = props => {
    
  if(props.hasError) {
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

  const events = props.events;

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

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </div>
  )
  
};

export const getServerSideProps = async(context) => {
  const { params } = context;

  const [year, month] = params.slug;
    
  if(
    isNaN(+year) || 
    isNaN(+month) || 
    +year > 2030 || 
    +year < 2021 || 
    +month < 1 || 
    +month > 12
  ) {
    return {
      props: {
        hasError: true
      }
      // notFound: true,
      // redirect: {
      //   destination: '/error-page'
      // }
    };
  }

  const events = await getFilteredEvents({year: +year, month: +month});

  return {
    props: {
      events,
      date: {
        year,
        month
      }
    }
  }
};

export default FilteredEventsPage;
