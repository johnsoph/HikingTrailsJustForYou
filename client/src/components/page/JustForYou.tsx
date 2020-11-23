import React from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import { Typography, Select, MenuItem } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { UPDATE_FILTER } from '../../redux/action-types';
import { Filter, FilterType, Hikes } from '../../common/model';
import { number } from 'prop-types';

// import FilterBarItem from '../FilterBarItem';


// type definitions
interface StateProps {
  filter: Filter;
  // disiredHikes: Hikes;
}

// type definiton
interface DispatchProps {
  updateFilter: (payload: Filter) => void
}

// type definition
interface OwnProps {
//   backgroundColor: string
}

type Props = StateProps & DispatchProps & OwnProps

// redux state objects
const mapState = (state: any) => ({
  filter: state.filter
});

// actions
const mapDispatch = {
  updateFilter:(payload) => ({type: UPDATE_FILTER, payload})
};


function JustForYou(props: Props) {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [filterSelection, setFilterSelection] = React.useState(props.filter?.filterType);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {

    setOpenDialog(false);
  };

  const handleSave = () => {
    const newItem = {
      desiredHikes: [],
      filterType: filterSelection
    }
    // save selected value
    props.updateFilter(newItem)
    
    // close dialog box
    handleCloseDialog();
  };

  const handleChange = (e) => {
    setFilterSelection(e.target.value)
  }

  const getJustForYouDialog = () => {
    debugger;
    return (
      <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Just For You Settings</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Select how you would like to filter your hikes
            </DialogContentText>
            <FormControl className="FilterBar">
                <InputLabel id="JustForYouLabel">Select Filter</InputLabel>
                <Select 
                    labelId="hiking_vibe" 
                    id="hiking_vibe" 
                    value ={filterSelection} 
                    onChange={handleChange}>
                    <MenuItem value={0}><em>Nearby Hikes</em></MenuItem>
                    <MenuItem value={1}>Easy and Chill</MenuItem>
                    <MenuItem value={2}>Best Match, My Fitness Level</MenuItem>
                    <MenuItem value={3}>Challenge Me</MenuItem>
                </Select>
                <input type="text" placeholder="Zip Code"/>
            </FormControl>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleSave} color="primary">
              Save
            </Button>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
    )
  };
  
  return (
    <div>
       <Button 
       className="JustForYouButton" 
       variant="contained" 
       onClick={handleClickOpenDialog}>
        Just For You Hikes
      </Button>
      {getJustForYouDialog()}
    </div>
  );
}

// export default (JustForYou)

export default connect<StateProps, DispatchProps, OwnProps>(
  mapState,
  mapDispatch
)
(JustForYou)

