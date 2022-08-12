import { MongoClient } from 'mongodb';

const handler = async(req, res) => {
  const { email } = req.body;
  if(!email || !email.includes('@')) {
    res.status(400).json({ message: 'Bad request'});
    return;
  }

  if(req.method === 'POST') {
    const client = await MongoClient.connect(process.env.MONGO_CONN)
    const db = client.db();
    await db.collection('newsletter').insertOne({email});
    client.close();
    res.status(201).json({message: `${email} registered successfully`});
  }
};

export default handler;
