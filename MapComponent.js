// src/components/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = ({ profiles }) => {
    return (
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {profiles.map(profile => (
                <Marker position={[profile.latitude, profile.longitude]} key={profile.id}>
                    <Popup>{profile.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
