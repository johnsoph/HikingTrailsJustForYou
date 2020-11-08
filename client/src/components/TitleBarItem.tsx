import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

export default function TitleBarItem() {
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleClickOpenSignup = () => {
    setOpenSignUp(true);
  };

  const handleCloseSignup = () => {
    setOpenSignUp(false);
  };

  const getSignUpDialog = () => {
    return (
      <Dialog open={openSignUp} onClose={handleCloseSignup} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
            <TextField
              margin="dense"
              id="name"
              label="Name"
              type="name"
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="gender"
              label="Gender"
              type="gender"
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="age"
              label="Age"
              type="age"
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="zipcode"
              label="Zipcode"
              type="zipcode"
              variant="outlined"
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSignup} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseSignup} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
    )
  };
  
  const getLoginDialog = () => {
    return (
      <Dialog open={openLogin} onClose={handleCloseLogin} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseLogin} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseLogin} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
    )
  };
  return (
    <div>
      <Typography variant="h3" gutterBottom >PataGucci</Typography>
      <Button className="LoginButton" variant="contained" color="primary" onClick={handleClickOpenLogin}>
        Login
      </Button>
      <Button className="SignUpButton" variant="contained" onClick={handleClickOpenSignup}>
        Sign up
      </Button>
      {getSignUpDialog()}
      {getLoginDialog()}
    </div>
  );
}
