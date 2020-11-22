import React, { useState } from 'react';
import { connect } from "react-redux";
import { Hikes, FilterType, Filter } from '../../common/model';
import { UPDATE_USER } from '../../redux/action-types';
import { DEFAULT_HIKES } from '../../common/mockHikes';
import HikeInfoItem from './HikeInfoItem';
import HikeBoxItem from './HikeBoxItem';

// type definitions
interface StateProps {
  hikes: Hikes[],
  filteredHikes: Filter,
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
  filteredHikes: state.filteredHikes
})

// actions
const mapDispatch = {
  updateUser: (payload) => ({ type: UPDATE_USER, payload})
}

function HikeListContainer(props: Props) {
    const [filterSelection, setFilterSection] = useState(props.filteredHikes?.filterType)
    const [selectedHikeIndex, setSelectedHikeIndex] = useState(0)
    const [hikes, setHikes] = useState(props.hikes)
    const selectedHike = hikes[selectedHikeIndex]
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

    return filterSelection !== FilterType.None ? (
    

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
    ) : null
}

// Typical usage: `connect` is called after the component is defined
export default connect<StateProps, DispatchProps, OwnProps>(
  mapState,
  mapDispatch
)(HikeListContainer)
