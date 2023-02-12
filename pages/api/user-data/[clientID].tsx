// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DB_NAME } from "@/lib/config";
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/config/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query.clientID);

  const client = await clientPromise;
  const db = client.db(DB_NAME);
  switch (req.method) {
    case "GET":
      const userData = await db.collection("user-data").find({}).toArray();
      res.status(400).json({ data: userData });
      break;
    default:
      return res.status(405).send({
        error: true,
        message: `${req.method} requests are not allowed in this path.`,
      });
  }
}
