import { DB_NAME, getDataBase } from "@/lib/config";

export const getUserData = async (url_nickname: string) => {
  try {
    const mongoClient = await getDataBase();
    const db = mongoClient.db(DB_NAME);
    const repo = db.collection("user-data");

    return repo.findOne({ url_nickname });
  } catch (error) {
    console.log(error);
  }
};
