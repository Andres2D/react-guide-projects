import { connectToDatabase } from '../../../lib/db';
import { hashPassword } from '../../../lib/auth';

const handler = async(req, res) => {
  
  if(req.method !== 'POST') {
    return;
  }

  const { email, password } = req.body;

  if(!email || !email.includes('@') || !password || password.trim().length < 7) {
    return res.status(422).json({
      message: 'Invalid input'
    });
  }
  
  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection('users').findOne({email});

  if(existingUser) {
    res.status(422).json({message: 'User already exist!'})
    client.close()
    return;
  }

  const hashedPassword = await hashPassword(password);

  await db.collection('users').insertOne({
    email,
    password: hashedPassword
  });

  res.status(201).json({
    message: 'Created user!'
  });
  client.close();
};

export default handler;
