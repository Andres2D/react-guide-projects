import { MongoClient } from 'mongodb';

const connectDatabase = async() => {
  const client = await MongoClient.connect(process.env.MONGO_CONN)
  return client;
}

const insertDocument = async(client, document) => {
  const db = client.db();
  await db.collection('newsletter').insertOne(document);
};

const handler = async(req, res) => {
  const { email } = req.body;
  if(!email || !email.includes('@')) {
    res.status(400).json({ message: 'Bad request'});
    return;
  }

  if(req.method === 'POST') {

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the DB failed!'});
      return;
    }

    try {
      await insertDocument(client, {email}); 
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed!'});
      return;
    }
    res.status(201).json({message: `${email} registered successfully`});
  }
};

export default handler;
