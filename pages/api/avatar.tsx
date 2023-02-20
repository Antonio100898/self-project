import { uploadNewImage } from "@/lib/api/controllers/upload-image-controller";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  switch (req.method) {
    case "POST":
      return uploadNewImage(req, res);
    default:
      return res.status(405).send({
        error: true,
        message: `${req.method} requests are not allowed in this path.`,
      });
  }
}
