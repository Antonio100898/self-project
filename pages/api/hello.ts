// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/config/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("3plCluster");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("users").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case "GET":
      const allUsers = await db.collection("posts").find({}).toArray();
      res.json({ status: 200, data: allUsers });
      break;
  }
}
