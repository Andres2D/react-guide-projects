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
    id: 'm1',
    title: 'A Third Meetup',
    image: 'https://thumbs.dreamstime.com/b/shanghai-morning-city-landscape-empty-asphalt-road-shanghai-morning-city-landscape-asphalt-road-155904083.jpg',
    address: 'Shangai 1334543',
    description: 'This is a third meetup'
  }
]

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} /> 
};

export default HomePage;
