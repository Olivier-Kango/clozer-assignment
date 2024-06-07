import React from 'react';
import { TabsData } from '../../../types/tabsData';
import Image from 'next/image';
import styles from '../styling/Card.module.css'; 

interface CardProps {
  details: TabsData;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ details, onClick }) => {
  const item = details.items[0];
  let Album: string | undefined;
  let Artists: string[] | undefined;
  let CoverURL: string | undefined;

  if (item.details && 'Album' in item.details && 'Artists' in item.details && 'CoverURL' in item.details) {
    Album = item.details.Album;
    Artists = item.details.Artists;
    CoverURL = item.details.CoverURL;
  }

  return (
    <div className={styles.card} onClick={onClick}>
      {CoverURL && <Image src={CoverURL} alt={Album || "Cover"} width={132} height={132} />}
      <div>
        <h3>{Album}</h3>
        <p>{Artists}</p>
      </div>
    </div>
  );
};

export default Card;
