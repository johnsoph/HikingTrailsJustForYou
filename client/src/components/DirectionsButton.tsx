import React from 'react';

interface DirectionsProps {
  destination: string;
}

export default function DirectionsButton({ destination } : DirectionsProps) {
  return (
    <div>
      <button 
        value="Google Map Directions"
        onClick={() => goToMap(destination)}>
        Directions
      </button>
    </div>
  );
}

function goToMap(destination : string) {
  navigator.geolocation.getCurrentPosition(
    function(currentLocation) {
      const origin = String(`${currentLocation.coords.latitude},${currentLocation.coords.longitude}`);
      return window.open(`https://google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`);
    }
  );
}