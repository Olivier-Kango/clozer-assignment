import React from 'react';
import Image from 'next/image';

interface UserProfileProps {
  avatar?: string;
  onClick: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ avatar = '', onClick }) => {
  console.log("Rendering UserProfile with avatar:", avatar);

  return (
    <div className="user-profile">
      {avatar ? (
        <Image src={avatar} alt="User Avatar" width={100} height={100} />
      ) : (
        <div>No Avatar Available</div>
      )}
      <button onClick={onClick} className="detail-button">Voir les détails</button>
    </div>
  );
};

export default UserProfile;
