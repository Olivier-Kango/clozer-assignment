import React from 'react';
import styles from '../components/styling/NavigationBar.module.css';

const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>My Music</li>
        <li className={styles.menuItem}>Gigs</li>
        <li className={styles.menuItem}>My Shows</li>
        <li className={styles.menuItem}>My Merch</li>
        <li className={styles.menuItem}>My Merch</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
