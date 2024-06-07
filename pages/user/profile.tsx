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
    return <p>Error loading user data</p>;
  }

  return (
    <div>
      <UserProfile avatar={userData.avatar} onClick={handleDetailsClick} />
      <h1>{userData.username}</h1>
    </div>
  );
};

export default ProfilePage;
