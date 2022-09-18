import { getSession } from 'next-auth/react';
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword, hashPassword } from '../../../lib/auth';

export const handler = async(req, res) => {
  if(req.method !== 'PATCH') {
    res.status(401).json({message: 'Incorrect method'});
    return;
  }
  
  const session = await getSession({ req });
  
  if(!session) {
    res.status(401).json({message: 'Not authenticated'});
    return;
  }

  const userEmail = session.user.email;
  const { oldPassword, newPassword } = req.body;

  const client = await connectToDatabase();
  const usersCollection = client.db().collection('users');
  const user = await usersCollection.findOne({email: userEmail});

  if(!user) {
    client.close();
    res.status(404).json({ message: 'User not found'});
    return;
  }

  const currentPassword = user.password;

  const passwordAreEqual = await verifyPassword(oldPassword, currentPassword);

  if(!passwordAreEqual) {
    res.status(403).json({message: 'Invalid password'});
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);

  await usersCollection.updateOne(
    { email: userEmail}, 
    { $set: { password: hashedPassword} }
  );

  client.close();
  res.status(200).json({ message: 'Password updated'});
};

export default handler;
