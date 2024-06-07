import React, { useEffect, useState } from 'react';
import MyMerch from '../../app/components/MyMerch';
import { TabsData } from '@/types/tabsData';

interface MerchPageProps {
  tabsData: TabsData;
}

const MerchPage: React.FC<MerchPageProps> = ({ tabsData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tabsData !== undefined) {
      setLoading(false);
    }
  }, [tabsData]);

  const handleDetailsClick = () => {
    console.log("Merch details clicked:", tabsData);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MyMerch onClick={handleDetailsClick} tabsData={[]} />
      )}
    </div>
  );
};

export default MerchPage;
