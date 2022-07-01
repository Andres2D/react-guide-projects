import { MongoClient } from 'mongodb';

// /api/new-meetup
const handler = async(req, res) => {
  if(req.method !== 'POST'){
    resstatus(400).json(null);
  }

  const data = req.body;
  const client =await MongoClient.connect(process.env.MONGODB_CNN);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const result = await meetupsCollection.insertOne(data);
  console.log(result);
  client.close();
  res.status(201).json({
    message: 'Meetup created!'
  });
};

export default handler;
