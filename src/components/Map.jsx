import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'; // Import the routing machine CSS
import 'leaflet-routing-machine'; // Import the routing machine library

const Map = ({ onSelectLocation, onClose }) => {
  const mapRef = useRef(null);
  const [selectedLatitude, setSelectedLatitude] = useState('');
  const [selectedLongitude, setSelectedLongitude] = useState('');
  const [isFirstClick, setIsFirstClick] = useState(true);
  let routingControl = null; // To hold the reference to the routing control

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([23.684994, 90.356331], 7); // Set view to Bangladesh

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.on('click', (event) => {
      const { lat, lng } = event.latlng;
      if (isFirstClick) {
        setSelectedLatitude(lat.toFixed(6));
        setSelectedLongitude(lng.toFixed(6));
        setIsFirstClick(false);
      } else {
        if (routingControl) {
          map.removeControl(routingControl); // Remove existing routing control
        }
        routingControl = L.Routing.control({
          waypoints: [
            L.latLng(selectedLatitude, selectedLongitude),
            L.latLng(lat, lng)
          ],
          routeWhileDragging: true,
          draggableWaypoints: false,
          lineOptions: {
            styles: [{ color: '#FF0000', opacity: 0.7, weight: 5 }]
          },
          show: true,
          createMarker: function (i, waypoint) {
            return L.marker(waypoint.latLng, {
              draggable: true,
              icon: L.divIcon({ className: 'routing-icon', html: `${i + 1}` })
            });
          }
        }).addTo(map);
        setIsFirstClick(true);
      }
    });

    return () => {
      map.off('click');
      if (routingControl) {
        map.removeControl(routingControl); // Cleanup the routing control when the component unmounts
      }
      map.remove();
    };
  }, [onSelectLocation, isFirstClick, selectedLatitude, selectedLongitude]);

  return (
    <div className="map-modal">
      <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
      <button onClick={onClose}>Close Map</button>
    </div>
  );
};

export default Map;
