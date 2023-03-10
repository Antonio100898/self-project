import { MongoClient, MongoClientOptions } from "mongodb";
import { MONGODB_URI } from ".";

export const getDataBase = async () => {
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } as MongoClientOptions;
  
  let client: MongoClient;
  let clientPromise;
  
  if (!MONGODB_URI) {
    throw new Error("Add Mongo URI to .env.local");
  }
  
  if (MONGODB_URI) {
    if (process.env.NODE_ENV === "development") {
      //@ts-ignore
      if (!global._mongoClientPromise) {
        client = new MongoClient(MONGODB_URI, options); //@ts-ignore
        global._mongoClientPromise = client.connect();
      } //@ts-ignore
      clientPromise = global._mongoClientPromise;
    } else {
      client = new MongoClient(MONGODB_URI, options);
      clientPromise = client.connect();
    }
  }
    
  
  return clientPromise as Promise<MongoClient>;
}

