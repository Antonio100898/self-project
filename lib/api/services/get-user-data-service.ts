import { DB_NAME, getDataBase } from "@/lib/config";

export const getUserData = async (id: number) => {
  try {
    const mongoClient = await getDataBase();
    const db = mongoClient.db(DB_NAME);
    const repo = db.collection("user-data");

    return repo.findOne({ id: id });
  } catch (error) {
    console.log(error);
  }
};
