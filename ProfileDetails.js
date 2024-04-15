// src/components/ProfileDetails.js
import React from 'react';
import './styles.css';

const ProfileDetails = ({ profile }) => {
    return (
        <div>
            <h2>{profile.name}</h2>
            <img src={profile.photo} alt={profile.name} />
            <p>{profile.description}</p>
            <p>Address: {profile.address}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default ProfileDetails;
