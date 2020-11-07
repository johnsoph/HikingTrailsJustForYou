import React from 'react';

type DirectionsProps = {
  destination: string;
}

export const DirectionsButton = ({ destination } : DirectionsProps) => {
  return (
    <div className='dir-button'>
      <button 
        onClick={() => goToMap(destination)}>
        Demo Nav
      </button>
    </div>
  );
}

function goToMap(destination : string) {
  /** Use Geolocation API call to get current position and open link to Google maps with
   *  appropriate map parameters.
   */
  navigator.geolocation.getCurrentPosition(
    function(currentLocation) {
      const origin = String(`${currentLocation.coords.latitude},${currentLocation.coords.longitude}`);
      return window.open(`https://google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`);})}