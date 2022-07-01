import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import MeetupDetail from "../components/meetups/MeetupDetail";

const MeetupDetails = props => {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta
          name='description'
          content={props.meetup.description}
        ></meta>
      </Head>
      <MeetupDetail
        image={props.meetup.image}
        title={props.meetup.title}
        address={props.meetup.address}
        description={props.meetup.description}
      />
    </>
  );
};

export const getStaticPaths = async() => {
  const client = await MongoClient.connect(process.env.MONGODB_CNN);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({params: {meetupId: meetup._id.toString()}}))
  }
};

export const getStaticProps = async(context) => {
  // fetch data dor a single meetup
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(process.env.MONGODB_CNN);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetupRes = await meetupsCollection.findOne({_id: ObjectId(meetupId)});
  client.close();

  return {
    props: {
      meetup: {
        id: meetupRes._id.toString(),
        title: meetupRes.title,
        address: meetupRes.address,
        image: meetupRes.image,
        description: meetupRes.description
      }
    }
  }
};

export default MeetupDetails;
 