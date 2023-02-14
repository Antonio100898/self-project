import { NextApiRequest, NextApiResponse } from "next";
import { getUserData } from "../services/get-user-data-service";

export const fetchUserData = async (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  let userData;

  try {
    const { clientID } = _req.query;
    if (clientID) {
      userData = await getUserData(Number(clientID));
    }
    if (!userData) return res.status(404).json({ error: true, message: "Requested page does not exists" });
    
    res.status(200).json({ error: false, message: "", data: userData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: true,
      message: error,
    });
  }
};
