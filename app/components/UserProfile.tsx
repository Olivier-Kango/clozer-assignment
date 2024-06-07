import React from 'react';
import Image from 'next/image';
import styles from './styling/UserProfile.module.css';

interface UserProfileProps {
  avatar?: string;
  onClick: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ avatar = '', onClick }) => {
  console.log("Rendering UserProfile with avatar:", avatar);

  return (
    <div className={styles['user-profile']}>
      {avatar ? (
        <Image src={avatar} alt="User Avatar" width={366} height={460} />
      ) : (
        <p className={styles['no-avatar']}>No Avatar Available</p>
      )}
      {/* <button onClick={onClick} className={styles['detail-button']}>Voir les détails</button> */}
    </div>
  );
};

export default UserProfile;
