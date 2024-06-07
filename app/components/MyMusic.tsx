import React, { useEffect, useState } from 'react';
import { TabsData } from '@/types/tabsData';
import Card from '../components/ui/Card';
import { getTabsData } from '@/pages/api/tabs';

interface MyMusicProps {
  tabsData: TabsData[];
  onClick: () => void;
}

const MyMusic: React.FC<MyMusicProps> = ({  tabsData, onClick }) => {
  const [musicData, setMusicData] = useState<TabsData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTabsData();
        setMusicData(response);
      } catch (error) {
        console.error("Error fetching music data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {musicData ? (
        musicData.map((music: TabsData) => (
          <Card key={music.id} details={music} onClick={onClick} />
        ))
      ) : (
        <div>Loading music data...</div>
      )}
    </div>
  );
};

export default MyMusic;
