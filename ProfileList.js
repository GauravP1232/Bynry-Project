// src/components/ProfileList.js
import React, { useState } from 'react';
import './styles.css';

const ProfileList = ({ profiles }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProfiles, setFilteredProfiles] = useState(profiles);

    const handleSearch = e => {
        const term = e.target.value;
        setSearchTerm(term);
        const filtered = profiles.filter(profile =>
            profile.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredProfiles(filtered);
    };

    return (
        <div>
            <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />
            {filteredProfiles.map(profile => (
                <div key={profile.id}>
                    <h2>{profile.name}</h2>
                    <img src={profile.photo} alt={profile.name} />
                    <p>{profile.description}</p>
                    <button>Summary</button>
                </div>
            ))}
        </div>
    );
};

export default ProfileList;
