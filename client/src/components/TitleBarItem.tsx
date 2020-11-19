import React from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import { UPDATE_USER } from '../redux/action-types';
import { User } from '../common/model';


// type definitions
interface StateProps {
  user: User;
}

// type definiton
interface DispatchProps {
  updateUser: (payload: User) => void
}

// type definition
interface OwnProps {
//   backgroundColor: string
}

type Props = StateProps & DispatchProps & OwnProps

// redux state objects
const mapState = (state: any) => ({
  user: state.user,
  hikes: state.hikes
})

// actions
const mapDispatch = {
  updateUser: (payload) => ({ type: UPDATE_USER, payload})
}


function TitleBarItem(props: Props) {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [userName, setUserName] = React.useState(props.user?.name);
  const [userAge, setUserAge] = React.useState(props.user?.age);
  const [userActivityLevel, setUserActivityLevel] = React.useState(props.user?.activityLevel);
  const [userZipCode, setUserZipCode] = React.useState(props.user?.zipCode);
  const [userGender, setUserGender] = React.useState(props.user?.gender);
  const [userHikingExperience, setUserHikingExperience] = React.useState(props.user?.hikingExperience);
  const [userAvgDailySteps, setUserAvgDailySteps] = React.useState(props.user?.avgDailySteps);

  // const [openLogin, setOpenLogin] = React.useState(false);

  // const handleClickOpenLogin = () => {
  //   setOpenLogin(true);
  // };

  // const handleCloseLogin = () => {
  //   setOpenLogin(false);
  // };

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCalculateActivityLevel = () => {
    const newUser: User = {
      name: userName,
      age: userAge,
      gender: userGender,
      zipCode: userZipCode,
      avgDailySteps: userAvgDailySteps,
      hikingExperience: userHikingExperience,
      activityLevel: userActivityLevel,
    }
    props.updateUser(newUser);
    handleCloseDialog();
  }

  const getUserPreferenceDialog = () => {
    return (
      <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">User Preferences</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your information to calculate your hiking level and get recommended hikes just for you.
            </DialogContentText>
            <TextField
              margin="dense"
              id="name"
              label="Name"
              defaultValue={userName}
              type="name"
              variant="outlined"
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="gender"
              label="Gender"
              defaultValue={userGender}
              type="gender"
              variant="outlined"
              onChange={(e) => setUserGender(e.target.value)}
            />
            <TextField
              margin="dense"
              id="age"
              label="Age"
              defaultValue={userAge}
              type="number"
              variant="outlined"
              onChange={(e) => setUserAge(parseInt(e.target.value))}
            />
            <TextField
              margin="dense"
              id="zipcode"
              label="Zipcode"
              defaultValue={userZipCode}
              type="number"
              variant="outlined"
              onChange={(e) => setUserZipCode(parseInt(e.target.value))}
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCalculateActivityLevel} color="primary">
              Calculate Activity Level
            </Button>
          </DialogActions>
        </Dialog>
    )
  };
  
  return (
    <div>
      <Typography variant="h3" gutterBottom >PataGucci</Typography>
      {/* <Typography variant="body1" gutterBottom >{props.user}</Typography> */}
      <Button className="SignUpButton" variant="contained" onClick={handleClickOpenDialog}>
        User Preferences
      </Button>
      {getUserPreferenceDialog()}
    </div>
  );
}

// export default connector(TitleBarItem)

export default connect<StateProps, DispatchProps, OwnProps>(
  mapState,
  mapDispatch
)(TitleBarItem)

