import React from 'react';
import { TabsData } from '../../../types/tabsData';
import Image from 'next/image';
import styles from '../styling/Card.module.css'; 

interface CardProps {
  details: TabsData;
  onClick: () => void;
}

interface EventDetails {
  Artists: string[];
  CoverURL: string;
  Title: string;
}

const Card: React.FC<CardProps> = ({ details, onClick }) => {
  const { items } = details;

  // Filtrer les événements où Dean Martin est impliqué
  const deanMartinEvents = items.filter(item =>
    ('details' in item) && ('Artists' in item.details) && (item.details as EventDetails).Artists.includes('Dean Martin')
  );

  return (
    <div className={styles.card} onClick={onClick}>
       {deanMartinEvents.map(item => (
        <div key={item.id} className={styles.cardContent}>
          <div className={styles.cardImage}>
            <Image
              src={(item.details as EventDetails).CoverURL}
              alt={(item.details as EventDetails).Title}
              width={132}
              height={132}
            />
          </div>
          <div className={styles.cardText}>
            <h3>{(item.details as EventDetails).Title}</h3>
            <p>{(item.details as EventDetails).Artists.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
