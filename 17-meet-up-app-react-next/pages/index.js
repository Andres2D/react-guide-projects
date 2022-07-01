import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://thumbs.dreamstime.com/b/shanghai-morning-city-landscape-empty-asphalt-road-shanghai-morning-city-landscape-asphalt-road-155904083.jpg',
    address: 'Shangai 1334543',
    description: 'This is a first meetup'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://thumbs.dreamstime.com/b/shanghai-morning-city-landscape-empty-asphalt-road-shanghai-morning-city-landscape-asphalt-road-155904083.jpg',
    address: 'Shangai 1334543',
    description: 'This is a second meetup'
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image: 'https://thumbs.dreamstime.com/b/shanghai-morning-city-landscape-empty-asphalt-road-shanghai-morning-city-landscape-asphalt-road-155904083.jpg',
    address: 'Shangai 1334543',
    description: 'This is a third meetup'
  }
]

const HomePage = props => {
  return <MeetupList meetups={props.meetups} /> 
};

// Don't run durong build proccess, but in server after every deployment
// export const getServerSideProps = async(context) => {

//   const req = context.req;
//   const res = context.res;
//   // fecth data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//   };
// };

// Pregenerated during tht build proccess
export const getStaticProps = async() => {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10 // incremental static generation ---> every 10 seconds, data never older of 10 seconds
  };
};

export default HomePage;
