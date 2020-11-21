import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import buttonMapImage from '../../assets/images/Google_Maps_icon.svg';

type DirectionsProps = {
  destination: string;
}

const useStyles = makeStyles({
  buttonContainer: {
    width: '15%'
  },
  buttonStuffContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
  },
  buttonText: {
    textAlign: 'center',
    lineHeight: '125%',
    order: 0,

  },
  buttonImage: {
    order: 0,

  },
})

export const DirectionsButton = ({ destination } : DirectionsProps) => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.buttonContainer}
        onClick={() => goToMap(destination)}>
        <div className={classes.buttonStuffContainer}>
          <img className={classes.buttonImage} src={buttonMapImage} alt={"Google Map icon"}/>
          <h6 className={classes.buttonText}>Navigate{<br />}to{<br />}Trailhead</h6>
        </div>
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