import React, {useState} from 'react';
import './App.css';
import TitleBarItem from './TitleBarItem'
import FilterBarItem from './FilterBarItem'
import HikeBoxItem from './HikeBoxItem'
import HikeInfoItem from './HikeInfoItem'


const DEFAULT_HIKES = [
  {
    name: 'Mt. Shasta',
    picURL: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    description: 'Its a hike',
    info: 'Information about the hike',
    navLink: 'https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548',
    gear: {
      clothing: "Jacket",
      waterlevel: "Medium",
      walkinggear: "None",
      shoes: "walking",

    }
  },
  {
    name: 'Oaks Park',
    picURL: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    description: 'Not a real hike',
    info: 'No Info',
    navLink: 'https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548'
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