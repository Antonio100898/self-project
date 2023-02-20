import { NextApiRequest, NextApiResponse } from "next";
import { uploadAvatar } from "../services";

export const uploadNewImage = async (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const uploadedImageUrl = await uploadAvatar(1);
    res.status(200).json({ error: false, message: "", data: uploadedImageUrl });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: true,
      message: error,
    });
  }
};
