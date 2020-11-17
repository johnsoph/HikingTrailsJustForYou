import React, {useState, Component} from 'react';
import './App.css';
import TitleBarItem from './components/TitleBarItem'
import FilterBarItem from './components/FilterBarItem'
import HikeBoxItem from './components/HikeBoxItem'
import HikeInfoItem from './components/HikeInfoItem'
import TemplateComponent from './components/TemplateComponent'
import { DirectionsButton } from './components/DirectionsButton'
import Location from './Location'
import Toggle from './Toggle'
import { callAPI } from './utils/api'


const DEFAULT_HIKES = [
  {
    name: 'Bald Hill Trail',
    picURL: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    description: 'The hike to the top of Bald Hill offers some beautiful views of the Willamette Valley and Coast Range mountains. ',
    info: 'Bald Hill Trail is a 2.7 mile heavily trafficked loop trail located near Corvallis, Oregon that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
    navLink: 'https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548',
    clothing: "Jacket",
    waterlevel: "Medium",
    walkinggear: "None",
    shoes: "Walking",
    location: "Corvallis Oregon"
  },
  {
    name: 'The Old Growth Trail',
    picURL: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    description: 'A wonderful short hike through the old growth of MacDonald Forest',
    info: 'The Old Growth Trail is a 1.5 mile heavily trafficked loop trail located near Corvallis, Oregon that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking, walking, running, and bird watching and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
    navLink: 'https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548',
    clothing: "Short and a T-Shirt",
    waterlevel: "Low",
    walkinggear: "None",
    shoes: "Walking",
    location: "Corvallis Oregon"
  },
  {
    name: '560 Loop Trail',
    picURL: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    description: 'This is a loop hike, which can be done in either direction. Many hike it "counter-clock wise", and bike it "clock-wise."',
    info: '560 Loop Trail  is a 5.3 mile heavily trafficked loop trail located near Corvallis, Oregon that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs and horses are also able to use this trail.',
    navLink: 'https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548',
    clothing: "Work-Out Gear",
    waterlevel: "Medium",
    walkinggear: "Walking Sticks, Bikes, or Horses",
    shoes: "Walking or Running",
    location: "Corvallis Oregon"
  }
]

function App() {
  const [selectedHikeIndex, setSelectedHikeIndex] = useState(0)
  const [hikes, setHikes] = useState(DEFAULT_HIKES)
  const selectedHike = hikes[selectedHikeIndex]
  const [showHikes, setShowHikes] = useState(false)
  var lat = 0
  var longt = 0


  navigator.geolocation.getCurrentPosition(function(position) {
    lat  = position.coords.latitude
    longt  = position.coords.longitude
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });

  const renderInfoPanel = ()=>{
    if(showHikes){
      return <HikeInfoItem
        info={selectedHike.info}
        navLink={selectedHike.navLink}
        clothing={selectedHike.clothing}
        waterlevel={selectedHike.waterlevel}
        walkinggear={selectedHike.walkinggear}
        shoes={selectedHike.shoes}
      />
    }
    else {
      return <></>
    }
  }
  // Place this call somewhere else -- it's not saving the state in redux
  callAPI();


  return (
    <div className="container">
      <div className="titleBar">
        <TitleBarItem/>
      </div>

      <div className="filterBar">
        <FilterBarItem/>
        <div className="toggleButton">
          <Toggle label="Just For You Hikes" onChange={setShowHikes}/>
        </div>
      </div>

      <div>
        {showHikes && hikes.map((hike,index) => (
          <HikeBoxItem
            key={index}
            name={hike.name}
            picURL={hike.picURL}
            description={hike.description}
            handleClick={() => setSelectedHikeIndex(index)}
          />
        ))}
        </div>
        <div>
        {renderInfoPanel()}
      </div>
      <div>
        <Location/>
      </div>
    </div>
  );
}

export default App;
