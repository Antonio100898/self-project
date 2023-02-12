import { NextApiRequest, NextApiResponse } from "next";

export const fetchUserData = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    // call async function to get user`s data from database
    // return the data in response with status 200
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: true,
      message: error
    })
  }
};
