import { 
  connectDatabase, 
  insertDocument, 
  getAllComments 
} from '../../../helpers/db-util';

const handler = async(req, res) => {
  const { id } = req.query;

  if(!id) {
    return req.status(400).json({ message: 'Bad request' });
  }

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting o the DB failed}!'});
    return;
  }

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

    try {
      const result = await insertDocument(client, newComment, 'comments');
      newComment._id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: 'Inserting comment failed!'});
      client.close();
      return;
    }

    res.status(201).json({ message: 'comment saved successfully', comment: newComment });
    client.close();
    return;
  } 
  
  if(req.method === 'GET'){
    try {
      const comments = await getAllComments(client, 'comments', {_id: -1}, {eventId: id});
      res.status(200).json({comments});
    } catch (error) {
      res.status(500).json({ message: 'Getting comments failed!'})
    }
    client.close();
    return;
  }

  client.close();
  res.status(400).json({ message: 'Bad request '});
};

export default handler;
