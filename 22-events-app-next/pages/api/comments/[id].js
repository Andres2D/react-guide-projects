import { MongoClient } from 'mongodb';

const handler = async(req, res) => {
  const { id } = req.query;

  if(!id) {
    return req.status(400).json({ message: 'Bad request' });
  }

  const client = await MongoClient.connect(process.env.MONGO_CONN);

  if(req.method === 'POST') {
    const { email, name, comment } = req.body;

    if(
      !email.includes('@') ||
      !name ||
      name.trim() === '' || 
      !comment ||
      comment.trim() === ''
    ) {
      res.status(400).json({ message: 'Bad request '});
      client.close();
      return;
    }
      
    const newComment = {
      email, 
      name, 
      comment,
      eventId: id
    }

    const db = client.db();
    const result = await db.collection('comments').insertOne(newComment);
    newComment.id = result.insertedId;

    res.status(201).json({ message: 'comment saved successfully', comment: newComment });
    client.close();
    return;
  } 
  
  if(req.method === 'GET'){
    const db = client.db();
    const comments = await db.collection('comments')
      .find({eventId: id})
      .sort({_id: -1})
      .toArray();
    res.status(200).json({comments});
    client.close();
    return;
  }

  client.close();
  res.status(400).json({ message: 'Bad request '});
};

export default handler;
