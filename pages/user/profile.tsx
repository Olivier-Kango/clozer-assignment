import React from 'react';
import UserProfile from '../../app/components/UserProfile';
import { UserData } from '../../types/UserData';

interface ProfilePageProps {
  userData: UserData | null;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userData }) => {
  const handleDetailsClick = () => {
  };

  if (!userData) {
    return <div>Error loading user data</div>; // Gérer le cas où userData est null
  }

  return (
    <div>
      <UserProfile avatar={userData.avatar} onClick={handleDetailsClick} />
      <h1>{userData.username}</h1>
    </div>
  );
};

export default ProfilePage;
