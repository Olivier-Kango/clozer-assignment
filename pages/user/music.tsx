import React, { useEffect, useState } from 'react';
import MyMusic from '../../app/components/MyMusic';
import { TabsData } from '@/types/tabsData';

interface MusicPageProps {
  tabsData: TabsData;
}

const MusicPage: React.FC<MusicPageProps> = ({ tabsData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tabsData !== undefined) {
      setLoading(false);
    }
  }, [tabsData]);

  const handleDetailsClick = () => {
    console.log("Music details clicked:", tabsData);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MyMusic onClick={handleDetailsClick} tabsData={[]} />
      )}
    </div>
  );
};

export default MusicPage;
