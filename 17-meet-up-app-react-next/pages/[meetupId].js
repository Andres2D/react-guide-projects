import MeetupDetail from "../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image='https://thumbs.dreamstime.com/b/shanghai-morning-city-landscape-empty-asphalt-road-shanghai-morning-city-landscape-asphalt-road-155904083.jpg'
      title='A First Meetup'
      address='Some Street 5, Some City'
      description='The meetup description'
    />
  );
};

export const getStaticPaths = async() => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        },
      },
      {
        params: {
          meetupId: 'm2'
        },
      }, 
      {
        params: {
          meetupId: 'm3'
        }
      }
    ]
  }
};

export const getStaticProps = async(context) => {
  // fetch data dor a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetup: {
        id: meetupId,
        image: 'https://thumbs.dreamstime.com/b/shanghai-morning-city-landscape-empty-asphalt-road-shanghai-morning-city-landscape-asphalt-road-155904083.jpg',
        title: 'A First Meetup',
        address: 'Some Street 5, Some City',
        description: 'The meetup description'
      }
    }
  }
};

export default MeetupDetails;
 