import { MongoClient } from 'mongodb';

export const connectDatabase = async() => {
  const client = await MongoClient.connect(process.env.MONGO_CONN)
  return client;
}

export const insertDocument = async(client, document, collection) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};

export const getAllComments = async(client, collection, sort, filter) => {
  const db = client.db();
    const comments = await db.collection(collection)
      .find(filter)
      .sort(sort)
      .toArray();
    return comments;
};
