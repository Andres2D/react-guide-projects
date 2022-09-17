import NexAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export default NexAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase();
        const db = client.db();

        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({email: credentials.email});
        
        if(!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if(!isValid) {
          client.close();
          throw new Error('Could not login!');
        }

        client.close();
        
        return {
          email: user.email
        };
      }
    })
  ]
});
