import React, {useState} from 'react';
import './App.css';
import TitleBarItem from './TitleBarItem'
import FilterBarItem from './FilterBarItem'
import HikeBoxItem from './HikeBoxItem'
import HikeInfoItem from './HikeInfoItem'

const DEFAULT_HIKES = [
  {
    name: 'Mt. Shasta',
    picURL: '',
    description: 'Its a hike',
    info: 'Information about the hike',
    navLink: 'Here is a link to go here'
  },
  {
    name: 'Oaks Park',
    picURL: '',
    description: 'Not a real hike',
    info: 'No Info',
    navLink: 'Here is a link to go here'
  }
]

function App() {
  const [selectedHikeIndex, setSelectedHikeIndex] = useState(0)
  const [hikes, setHikes] = useState(DEFAULT_HIKES)
  const selectedHike = hikes[selectedHikeIndex]

  return (
    <div className="container">
      <div className="titleBar"> <TitleBarItem/> </div>
      <div className="filterBar"> <FilterBarItem/> </div>
      <div>
        {hikes.map((hike,index) => {
          return(
            <HikeBoxItem
              key={index}
              name={hike.name}
              picURL={hike.picURL}
              description={hike.description}
              handleClick={() => setSelectedHikeIndex(index)}
            />
          )
        })}
        </div>
        <div>
        <HikeInfoItem
          info={selectedHike.info}
          navLink={selectedHike.navLink}
        />
      </div>
    </div>
  );
}

export default App;
