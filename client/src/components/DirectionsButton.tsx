import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import buttonMapImage from '../assets/images/Google_Maps_icon.svg';

type DirectionsProps = {
  destination: string;
}

const useStyles = makeStyles({
  buttonStyle: {
    width: '23%',
    backgroundImage: `url(${buttonMapImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    boxShadow: '1px 2px 1px #9E9E9E',
  }
})

export const DirectionsButton = ({ destination } : DirectionsProps) => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.buttonStyle}
        size="large"
        onClick={() => goToMap(destination)}>
        Directions
      </Button>
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