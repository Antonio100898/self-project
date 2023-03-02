import { NextApiRequest, NextApiResponse } from "next";
import { uploadAvatar } from "../services";

export const uploadNewImage = async (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  const {client_url, avatar} = _req.body // post request should have payload with id/url of client and avatar image 
  try {
    const uploadedImageUrl = await uploadAvatar(1); // function should accept  id/url of client and avatar image to upload for him
    res.status(200).json({ error: false, message: "", data: uploadedImageUrl });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: true,
      message: error,
    });
  }
};
