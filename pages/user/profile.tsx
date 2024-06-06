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
      <h1>User Profile</h1>
      <UserProfile avatar={userData.avatar} onClick={handleDetailsClick} />
      <p>Username: {userData.username}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default ProfilePage;
