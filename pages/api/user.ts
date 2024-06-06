import type { NextApiRequest, NextApiResponse } from 'next';

export async function getUserData() {
  try {
    const res = await fetch('https://europe-west3-clozer-bc97fb95.cloudfunctions.net/idols?slug=AssignmentUser');
    const userDataArray = await res.json();
    const userData = userDataArray[0];
    return userData;
  } catch (error) {
    throw error;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const userData = await getUserData();
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user data" });
  }
}
