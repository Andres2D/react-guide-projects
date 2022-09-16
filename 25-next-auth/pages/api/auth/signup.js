import { connectToDatabase } from '../../../lib/db';
import { hashedPassword } from '../../../lib/auth';

const handler = async(req, res) => {
  
  const { email, password } = req.body;

  if(!email || !email.includes('@') || !password || !password.trim().length < 7) {
    return res.status(422).json({
      message: 'Invalid input'
    });
  }
  
  const client = await connectToDatabase();

  const db = client.db();

  await db.collection('users').insertOne({
    email,
    password: hashedPassword(password)
  });

  res.status(201).json({
    message: 'Created user!'
  });
};

export default handler;
