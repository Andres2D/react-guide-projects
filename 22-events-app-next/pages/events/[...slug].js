import { useEffect, useState } from 'react';
import useSWR  from 'swr';
import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultsTitle';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/error-alert';
import Head from 'next/head';
// import { getFilteredEvents } from '../../helpers/api-util';

const FilteredEventsPage = () => {
  const router = useRouter();
  const [eventsFiltered, setEventsFiltered] = useState();
  const { data, error } = useSWR('https://react-http-22e9d-default-rtdb.firebaseio.com/events.json',
  (url) => fetch(url).then(res => res.json()));

  useEffect(() => {
    if(data) {
      const eventsMap = [];

      for(const key in data) {
        eventsMap.push({
          id: key,
          ...data[key]
        });
      };
      setEventsFiltered(eventsMap);
    }
  }, [data]);
  
  if(!eventsFiltered) {
    return <p className='center'>Loading...</p>
  }
  
  const [year, month] = router.query.slug;

  if(
    isNaN(+year) || 
    isNaN(+month) || 
    +year > 2030 || 
    +year < 2021 || 
    +month < 1 || 
    +month > 12 ||
    error
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

  const filteredEvents = eventsFiltered.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === +year && eventDate.getMonth() === +month - 1;
  });

  if(!filteredEvents || filteredEvents.length === 0) {
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

  const date = new Date(+year, +month - 1);

  return (
    <div>
      <Head>
        <title>Filtered events</title>
        <meta name='description' content={`All events for ${year}/${month}`} />
      </Head>
      <ResultsTitle date={date} />
      <EventList items={eventsFiltered} />
    </div>
  )
  
};

// export const getServerSideProps = async(context) => {
//   const { params } = context;

//   const [year, month] = params.slug;
    
//   if(
//     isNaN(+year) || 
//     isNaN(+month) || 
//     +year > 2030 || 
//     +year < 2021 || 
//     +month < 1 || 
//     +month > 12
//   ) {
//     return {
//       props: {
//         hasError: true
//       }
//       // notFound: true,
//       // redirect: {
//       //   destination: '/error-page'
//       // }
//     };
//   }

//   const events = await getFilteredEvents({year: +year, month: +month});

//   return {
//     props: {
//       events,
//       date: {
//         year,
//         month
//       }
//     }
//   }
// };

export default FilteredEventsPage;
