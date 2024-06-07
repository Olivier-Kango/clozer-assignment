import React, { useEffect, useState } from 'react';
import { TabsData } from '@/types/tabsData';
import Card from '../components/ui/Card';
import { getTabsData } from '@/pages/api/tabs';
import styles from '../components/styling/MyMerch.module.css';

interface MyMerchProps {
  tabsData: TabsData[];
  onClick: () => void;
}

const MyMerch: React.FC<MyMerchProps> = ({  tabsData, onClick }) => {
  const [merchData, setMerchData] = useState<TabsData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTabsData();
        setMerchData(response);
      } catch (error) {
        console.error("Error fetching merch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles['merch-container']}>
      {merchData ? (
        merchData
          .filter((merch: TabsData) => merch.type === "SHOP")
          .map((merch: TabsData) => (
            <Card key={merch.id} details={merch} onClick={onClick} />
          ))
      ) : (
        <p>Loading merch data...</p>
      )}
    </div>
  );
};

export default MyMerch;
