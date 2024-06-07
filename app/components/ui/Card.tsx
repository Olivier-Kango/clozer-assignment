import React from 'react';
import { TabsData } from '../../../types/tabsData';
import Image from 'next/image';

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
    <div className="card" onClick={onClick}>
      <h3>{Album}</h3>
      <p>{Artists}</p>
      {CoverURL && <Image src={CoverURL} alt={Album || "Cover"} width={200} height={200} />}
      {/* <h3>{details.title}</h3> */}
      {/* <p>{details.artists.join(', ')}</p>
      <a href={details.links[0].url} target="_blank" rel="noopener noreferrer">
        Listen
      </a> */}
    </div>
  );
};

export default Card;
