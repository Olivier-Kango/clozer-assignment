import React, { useState } from 'react';
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
  const [startIndex, setStartIndex] = useState(0);

  // Filtrer les événements où Dean Martin est impliqué
  const deanMartinEvents = items.filter(item =>
    ('details' in item) && ('Artists' in item.details) && (item.details as EventDetails).Artists.includes('Dean Martin')
  );

  const handleNext = () => {
    if (startIndex < deanMartinEvents.length - 4) {
      setStartIndex(prev => prev + 2);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 2);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        {deanMartinEvents.slice(startIndex, startIndex + 4).map(item => (
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
              <button className={styles.play}>Play</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles['navigation-buttons']}>
        <button onClick={handlePrev} disabled={startIndex === 0}>&lt;</button>
        <button onClick={handleNext} disabled={startIndex >= deanMartinEvents.length - 4}>&gt;</button>
      </div>
    </div>
  );
};

export default Card;
