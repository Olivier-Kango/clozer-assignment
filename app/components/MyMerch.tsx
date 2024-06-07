import React, { useEffect, useState } from 'react';
import { TabsData, ShopDetails } from '@/types/tabsData';
import { getTabsData } from '@/pages/api/tabs';
import styles from '../components/styling/MyMerch.module.css';
import CardShop from '../components/ui/CardShop';

interface MyMerchProps {
  tabsData: TabsData[];
  onClick: () => void;
}

const MyMerch: React.FC<MyMerchProps> = ({ tabsData, onClick }) => {
  const [merchData, setMerchData] = useState<TabsData[] | null>(null);
  const [cart, setCart] = useState<TabsData[]>([]);

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
    <div className={styles['container']}>
      <h2>My Merch</h2>
      <div className={styles['merch-container']}>
        {merchData ? (
          merchData
            .filter((merch: TabsData) => merch.type === "SHOP")
            .map((merch: TabsData) => (
              <div key={merch.id} className={styles.card}>
                {merch.items.map((item, index) => {
                  // Vérifiez d'abord si l'élément est de type ShopItem avant de le passer à CardShop
                  if ('details' in item && 'image_url' in item.details && 'price' in item.details) {
                    return <CardShop key={index} details={item.details as ShopDetails} onClick={onClick} />;
                  }
                  return null; // Ignore les éléments qui ne sont pas de type ShopItem
                })}
              </div>
            ))
        ) : (
          <p>Loading merch data...</p>
        )}
      </div>
    </div>
  );
};

export default MyMerch;
