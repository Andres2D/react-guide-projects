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
    const mockComments = [
      {
        id: '1',
        email: 'maximilian@mail.com',
        name: 'Maximilian',
        comment: 'My comment is amazing!'
      },
      {
        id: '2',
        email: 'maximilian@mail.com',
        name: 'Maximilian 2',
        comment: 'My comment is amazing 2!'
      }
    ];
    res.status(200).json({comments: mockComments});
    client.close();
    return;
  }

  client.close();
  res.status(400).json({ message: 'Bad request '});
};

export default handler;