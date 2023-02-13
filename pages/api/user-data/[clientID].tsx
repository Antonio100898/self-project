// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchUserData } from "@/lib/api/controllers";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  switch (req.method) {
    case "GET":
      return fetchUserData(req, res);
    default:
      return res.status(405).send({
        error: true,
        message: `${req.method} requests are not allowed in this path.`,
      });
  }
}
