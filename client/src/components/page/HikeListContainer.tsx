import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Hikes, FilterType } from '../../common/model';
import { UPDATE_USER } from '../../redux/action-types';
// import { DEFAULT_HIKES } from '../../common/mockHikes';
import HikeInfoItem from './HikeInfoItem';
import HikeBoxItem from './HikeBoxItem';
import * as _ from 'lodash';

// type definitions
interface StateProps {
  hikes: Hikes[],
  desiredHikes: string[]
  // filter: Filter;
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
  hikes: state.hikes,
  // filter: state.filter
  desiredHikes: state.desiredHikes,

})


// actions
const mapDispatch = {
  updateUser: (payload) => ({ type: UPDATE_USER, payload})
}

function HikeListContainer(props: Props) {
    const [filterSelection, setFilterSection] = useState(1);
    const [selectedHikeIndex, setSelectedHikeIndex] = useState(0)
    const [hikes, setHikes] = useState(props.hikes)
    const selectedHike = hikes[selectedHikeIndex]

    useEffect(() => {
      setHikes(props.hikes)
    }, [props.hikes]);
    // TODO BUG- filterSelection value does not get updated with State changes from Just for you

    const renderInfoPanel = ()=>{
        return <HikeInfoItem
          name={selectedHike?.name}
          summary={selectedHike?.summary}
          difficulty={selectedHike?.difficulty}
          rating={selectedHike?.stars}
          town={selectedHike?.location}
          length={selectedHike?.length}
          weather={selectedHike?.conditionStatus}
          navLink={selectedHike?.url}
          destination={`${selectedHike?.latitude},${selectedHike?.longitude}`}
        />
    }

    let newList: Hikes[] = []
    if(_.get(props.desiredHikes)) {
      _.forEach(props.hikes, (el: Hikes) => {
      if(el.difficulty in props.desiredHikes) {
        newList.push(el)
      } 
    }) 
  }
    // compare hike difficulty to desired hikes  
    // if not in disired hikes,  pop it
    // const hikeList = _.size(newList) > 0 ? newList : hikes;
    
    return (
    
        <>
        <div className="HikeList">
          {hikes.map((hike,index) => (
            <HikeBoxItem
              key={index}
              name={hike?.name}
              picURL={hike?.imgSmall}
              description={hike?.summary}
              handleClick={() => setSelectedHikeIndex(index)}
            />
          ))}
        </div>
        <div className="InfoList">
          {renderInfoPanel()}
        </div>
      </>
    )
}

// Typical usage: `connect` is called after the component is defined
export default connect<StateProps, DispatchProps, OwnProps>(
  mapState,
  mapDispatch
)(HikeListContainer)
