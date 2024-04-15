// src/components/AdminPanel.js
import React, { useState } from 'react';

const AdminPanel = ({ profiles, setProfiles }) => {
    const [formData, setFormData] = useState({
        name: '',
        photo: '',
        description: '',
        address: '',
    });

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Add new profile to the profiles state
        const newProfile = { ...formData, id: Date.now() };
        setProfiles([...profiles, newProfile]);
        // Reset form data
        setFormData({
            name: '',
            photo: '',
            description: '',
            address: '',
        });
    };

    return (
        <div>
            <h2>Add New Profile</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
                <input type="text" name="photo" placeholder="Photo URL" value={formData.photo} onChange={handleInputChange} />
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleInputChange}></textarea>
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} />
                <button type="submit">Add Profile</button>
            </form>
        </div>
    );
};

export default AdminPanel;
