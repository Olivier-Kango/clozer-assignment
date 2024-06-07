import React, { useEffect, useState } from 'react';
import { TabsData } from '@/types/tabsData';
import Card from '../components/ui/Card';
import { getTabsData } from '@/pages/api/tabs';
import styles from '../components/styling/MyMusic.module.css';

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
    <div className={styles['music-container']}>
      {musicData ? (
        musicData
          .filter((music: TabsData) => music.type === "MUSIC")
          .map((music: TabsData) => (
            <Card key={music.id} details={music} onClick={onClick} />
          ))
      ) : (
        <p>Loading music data...</p>
      )}
    </div>
  );
};

export default MyMusic;
