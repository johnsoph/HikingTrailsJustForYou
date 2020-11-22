import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import buttonMapImage from '../../assets/images/Google_Maps_icon.svg';

type DirectionsProps = {
  destination: string;
}

const useStyles = makeStyles({
  buttonStuffContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
  },
  buttonText: {
    textAlign: 'center',
    lineHeight: '125%',

  },
  buttonImage: {
    order: 0,
    width: '4em'

  },
})

let origin = "";

function mapURL(destination : string): string {
  getCoords()
  const destinationURL = `https://google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
  return String(destinationURL);
};

function getCoords() {
    navigator.geolocation.getCurrentPosition(
    function(currentLocation) {
      origin = String(`${currentLocation.coords.latitude},${currentLocation.coords.longitude}`);})}

export const DirectionsButton = ({ destination } : DirectionsProps) => {
  const classes = useStyles();
  const goToURL = mapURL(destination);
  return (
    <div>
      <a href={goToURL} target={"_blank"}>
      <Button
      >
        <div className={classes.buttonStuffContainer}>
          <img className={classes.buttonImage} src={buttonMapImage} alt={"Google Map icon"}/>
          <h6 className={classes.buttonText}>Navigate{<br />}to{<br />}Trailhead</h6>
        </div>
      </Button>
      </a>
    </div>
  );
}
