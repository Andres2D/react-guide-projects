
import Head from 'next/head'; 
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = props => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta 
          name="description" 
          content="Browse a huge lost of highly active React Meetups!"
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} /> 
    </>
  )
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
  const client = await MongoClient.connect(process.env.MONGODB_CNN);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map( meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10 // incremental static generation ---> every 10 seconds, data never older of 10 seconds
  };
};

export default HomePage;
