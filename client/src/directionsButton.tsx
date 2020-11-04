import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function ContainedButtons() {
  const classes = useStyles();
  const origin = '40.756795,-73.954298';
  const destination = '41.756795, -78.954298';

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" href={'https://google.com/maps/dir/?api=1&origin=' + origin
        + '&destination=' + destination + '&travelmode=driving'} target={'_blank'}>
        Directions
      </Button>
    </div>
  );
}