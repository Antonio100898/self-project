import { DB_NAME, getDataBase } from "@/lib/config";

export const getUserData = async (id: string) => {
  const client = await getDataBase();
  const db = client.db(DB_NAME);
  const repo = db.collection("user-data");
  
  return repo.findOne({ id: id });
};
