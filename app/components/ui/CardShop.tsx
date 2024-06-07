import React from 'react';
import { ShopDetails } from '../../../types/tabsData';
import Image from 'next/image';
import styles from '../styling/CardShop.module.css';

interface CardShopProps {
  details: ShopDetails;
  onClick: () => void;
}

const CardShop: React.FC<CardShopProps> = ({ details, onClick }) => {
  const { image_url, price } = details;

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={image_url}
          alt="image"
          width={200}
          height={200}
        />
      </div>
      <p>{price}</p>
    </div>
  );
};

export default CardShop;
