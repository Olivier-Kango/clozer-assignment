import type { NextApiRequest, NextApiResponse } from 'next';

export async function getTabsData() {
  try {
    const res = await fetch('https://europe-west3-clozer-bc97fb95.cloudfunctions.net/idols/RKAs4VxFlOZ1q2uWhD6UIYgybuj2/tabs?isEditor=false');
    const tabsDataArray = await res.json();
    const tabsData = tabsDataArray;
    console.log(tabsData)
    return tabsData;
  } catch (error) {
    throw error;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tabsData = await getTabsData();
    res.status(200).json(tabsData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tabs data" });
  }
}
