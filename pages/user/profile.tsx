import React from 'react';
import UserProfile from '../../app/components/UserProfile';
import { UserData } from '../../types/UserData';

interface ProfilePageProps {
  userData: UserData;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userData }) => {
  const handleDetailsClick = () => {
    console.log("User details clicked:", userData);
  };

  return (
    <div>
      <UserProfile avatar={userData?.avatar} onClick={handleDetailsClick} />
      <h1>{userData?.username}</h1>
    </div>
  );
};

export default ProfilePage;
