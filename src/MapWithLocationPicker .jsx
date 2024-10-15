import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

const MapWithLocationPicker = () => {
  const [startLocation, setStartLocation] = useState({ lat: 0, lng: 0 });
  const [endLocation, setEndLocation] = useState({ lat: 0, lng: 0 });

  // Custom hook to handle map click events
  function LocationMarker({ setLocation }) {
    const map = useMapEvents({
      click(e) {
        setLocation({
          lat: e.latlng.lat,
          lng: e.latlng.lng
        });
      },
    });

    return null;
  }

  return (
    <div>
      <form>
        <div>
          <label>Start Location:</label>
          <input type="text" value={`Lat: ${startLocation.lat}, Lng: ${startLocation.lng}`} readOnly />
        </div>
        <div>
          <label>End Location:</label>
          <input type="text" value={`Lat: ${endLocation.lat}, Lng: ${endLocation.lng}`} readOnly />
        </div>
      </form>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marker for start location */}
        <Marker position={[startLocation.lat, startLocation.lng]}>
          <Popup>Start Location</Popup>
        </Marker>
        {/* Marker for end location */}
        <Marker position={[endLocation.lat, endLocation.lng]}>
          <Popup>End Location</Popup>
        </Marker>
        {/* Event handler for map click */}
        <LocationMarker setLocation={setStartLocation} />
        <LocationMarker setLocation={setEndLocation} />
      </MapContainer>
    </div>
  );
};

export default MapWithLocationPicker;
