import React from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import JustForYou from '../../components/page/JustForYou'
import { UPDATE_USER, UPDATE_HIKING_LEVEL } from '../../redux/action-types';
import { User, HikingExperience, ActivityLevel, DailySteps, Hikes } from '../../common/model';
import { calculateUserLevel } from '../../utils/helpers';


// type definitions
interface StateProps {
  user: User;
  hikes: Hikes[],
  hikingLevel: number;
}

// type definiton
interface DispatchProps {
  updateUser: (payload: User) => void
  updateHikingLevel: (payload: number) => void
}

// type definition
interface OwnProps {
//   backgroundColor: string
}

type Props = StateProps & DispatchProps & OwnProps

// redux state objects
const mapState = (state: any) => ({
  user: state.user,
  hikes: state.hikes,
  hikingLevel: state.hikingLevel,
})

// actions
const mapDispatch = {
  updateUser: (payload) => ({ type: UPDATE_USER, payload}),
  updateHikingLevel : (payload) => ({type: UPDATE_HIKING_LEVEL, payload})
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
    const hikingLevel = calculateUserLevel(newUser);
    props.updateHikingLevel(hikingLevel);
    props.updateUser(newUser);
    handleCloseDialog();
  }

  const getUserPreferenceDialog = () => {
    return (
      <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">User Preferences</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {props.user.age}
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
              <Select
                labelId="dailySteps"
                id="dailySteps"
                value={userAvgDailySteps}
                variant="outlined"
                autoWidth={true}
                onChange={(e) => setUserAvgDailySteps(e.target.value as number)}
                label="Avg Daily Steps"
              >
                <MenuItem value={DailySteps["0 steps/day"]}>0 steps/day</MenuItem>
                <MenuItem value={DailySteps["1 - 5,000 steps/day"]}>1 - 5,000 steps/day</MenuItem>
                <MenuItem value={DailySteps["5,001 - 10,000 steps/day"]}>5,001 - 10,000 steps/day</MenuItem>
                <MenuItem value={DailySteps["10,001+ steps/day"]}>10,001+ steps/day</MenuItem>
              </Select>
              <Select
                labelId="activityLevel"
                id="activityLevel"
                variant="outlined"
                autoWidth={true}
                value={userActivityLevel}
                onChange={(e) => setUserActivityLevel(e.target.value as number)}
                label="Activity Level"
              >
                <MenuItem value={ActivityLevel["Can I bring my PSL on this hike?"]}>Can I bring my PSL on this hike?</MenuItem>
                <MenuItem value={ActivityLevel["Can I wear my nikes and look cute?"]}>Can I wear my nikes and look cute?</MenuItem>
                <MenuItem value={ActivityLevel["I've got hiking boots I never use"]}>I've got hiking boots I never use</MenuItem>
                <MenuItem value={ActivityLevel["There's mud on my hiking boots"]}>There's mud on my hiking boots</MenuItem>
                <MenuItem value={ActivityLevel["I've got my Arc'terk, Osprey backpack, and Diamond hiking polls ready to go!"]}>I've got my Arc'terk, Osprey backpack, and Diamond hiking polls ready to go!</MenuItem>
              </Select>
              <Select
                labelId="hikingExperience"
                id="hikingExperience"
                variant="outlined"
                autoWidth={true}
                value={userHikingExperience}
                onChange={(e) => setUserHikingExperience(e.target.value as number)}
                label="Hiking hikingExperience"
              >
                <MenuItem value={HikingExperience["0 hikes"]}>0 hikes</MenuItem>
                <MenuItem value={HikingExperience["1 - 5 hikes"]}>1 - 5 hikes</MenuItem>
                <MenuItem value={HikingExperience["5 - 10 hikes"]}>5 - 10 hikes</MenuItem>
                <MenuItem value={HikingExperience["10 - 20 hikes"]}>10 - 20 hikes</MenuItem>
                <MenuItem value={HikingExperience["20+ hikes"]}>20+ hikes</MenuItem>
              </Select>
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
      <div className="header-box">
        <h1 className="primary-header">
          <span className="primary-header-main">patagucci</span>
          <span className="primary-header-sub">find your trail</span>
        </h1>
      </div>
      <div className="options-box">
        <div className='SignUpButton'>
          <Button style={{fontFamily: 'Concert One', marginRight: '15px'}} variant="contained" onClick={handleClickOpenDialog}>
          User Preferences
        </Button>
        </div>
        { props.hikingLevel != null ?  
             (<Typography variant="body1" gutterBottom> Hiking Level: {props.hikingLevel}</Typography>) : null

        }
        <Typography variant="body1" gutterBottom> {props.hikingLevel}</Typography>
        {getUserPreferenceDialog()}
        < JustForYou />
      </div>
    </div>
  );
}

// export default connector(TitleBarItem)

export default connect<StateProps, DispatchProps, OwnProps>(
  mapState,
  mapDispatch
)(TitleBarItem)

