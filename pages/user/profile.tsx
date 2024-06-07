import React from 'react';
import UserProfile from '../../app/components/UserProfile';
import { UserData } from '../../types/UserData';
import styles from '../../app/components/styling/UserProfile.module.css';

interface ProfilePageProps {
  userData: UserData | null;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userData }) => {
  const handleDetailsClick = () => {
  };

  if (!userData) {
    return <p>Error loading user data</p>;
  }

  const displayName = userData.display_name.text ? userData.display_name.text.toString() : '';

  return (
    <div className={styles['profile-page']}>
      <UserProfile avatar={userData.avatar} onClick={handleDetailsClick} />
      <h1>{displayName}</h1>
    </div>
  );
};

export default ProfilePage;
