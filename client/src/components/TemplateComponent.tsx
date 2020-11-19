import React from 'react';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { Typography, Button } from '@material-ui/core';
import { UPDATE_USER } from '../redux/action-types';

// type definitions
interface StateProps {
  user: string
}

// type definiton
interface DispatchProps {
  updateUser: (payload: string) => void
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

function MyComponent(props: Props) {

    // Sample Use State
    // const [user, setUser] = React.useState('Kalise');

    // const handleUserChange = (name) => {
    //     setUser(name);
    //  };
    // <Button onClick={() => handleUserChange('name')}>Submit</Button>
    return(

    <div>

      <Typography variant="body1" gutterBottom >Name Stored in State:{props.user}</Typography>
      <TextField
        margin="dense"
        id="name"
        label="Name"
        type="name"
        variant="outlined"
        onChange={(e) => props.updateUser(e.target.value)}
        />     
    </div>
)}

// Typical usage: `connect` is called after the component is defined
export default connect<StateProps, DispatchProps, OwnProps>(
  mapState,
  mapDispatch
)(MyComponent)
