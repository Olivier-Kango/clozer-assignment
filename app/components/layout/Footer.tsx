// components/Footer.js

import React from 'react';
import Image from 'next/image';
import styles from '../../components/styling/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <a href="https://storage.googleapis.com/clozer-bc97fb95-legal/TalentPP_v03.pdf" target="_blank">Privacy Policy</a>
        <span>Powered by <a href="https://clozer.io/" target="_blank"><Image src="/images/clozerlogo.svg" alt="Next.js Logo" width={85} height={50} /></a></span>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
