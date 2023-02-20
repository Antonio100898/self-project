import { cloudinaryConfig, DB_NAME, getDataBase } from "@/lib/config";

export const uploadAvatar = async (clientId: number, file?: File) => {

  try {
    const cloudinary = cloudinaryConfig();

    const mongoClient = await getDataBase();
    const db = mongoClient.db(DB_NAME);
    const repo = db.collection("user-data");

    const path = "C://AntonDev/Icons/facebook.png"
    const fileName = path.split("/")[-1]

    const data = await cloudinary.uploader.upload(path, {
      public_id: fileName,
    });

    const url = cloudinary.url(fileName, {
      width: 400,
      height: 400,
      Crop: "fill",
    });
    console.log(data);
    
    const mongoResponse = await repo.updateOne({ id: clientId }, { $set: { "userWebData.avatar": url } });
    console.log(mongoResponse);
    
    return url;
  } catch (error) {
    console.log(error);
  }
};
