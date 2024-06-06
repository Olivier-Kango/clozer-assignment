import React from 'react';
import { TabsData } from '../../../types/tabsData';
import Image from 'next/image';

interface CardProps {
  details: TabsData;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ details, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <Image src={details.coverURL} alt={details.title} />
      <h3>{details.title}</h3>
      {/* <p>{details.artists.join(', ')}</p>
      <a href={details.links[0].url} target="_blank" rel="noopener noreferrer">
        Listen
      </a> */}
    </div>
  );
};

export default Card;
