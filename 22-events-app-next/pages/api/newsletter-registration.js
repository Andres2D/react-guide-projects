import { connectDatabase, insertDocument } from '../../helpers/db-util';

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
      await insertDocument(client, {email}, 'newsletter'); 
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed!'});
      return;
    }
    res.status(201).json({message: `${email} registered successfully`});
  }
};

export default handler;
