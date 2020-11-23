import React, { useState } from 'react';
import './App.css';
import TitleBarItem from './components/header/TitleBarItem'
import HikeListContainer from './components/page/HikeListContainer'
import Location from './Location'
import JustForYou from './components/page/JustForYou'
import { callAPI } from './utils/api'
import { callZipAPI } from './utils/zipCoords'
import { Filter, FilterType} from './common/model'
import Toggle from './Toggle';


function App() {
  
  const filterSelection: Filter = {
    // desiredHikes: [],
    filterType: 0
  }  
  const [showHikes, setShowHikes] = useState(false)


  var lat = 0
  var longt = 0


  navigator.geolocation.getCurrentPosition(function(position) {
    lat  = position.coords.latitude
    longt  = position.coords.longitude
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });

  // console.log("filterType is 0?:", filterSelection.filterType === FilterType.None)
  // console.log("Current filtertype:", filterSelection.filterType)

  return (
    <div className="container">
      <div className="titleBar">
        <TitleBarItem/>
      </div>
      <div className="filterBar">
      <div>
        <JustForYou />
      </div>
      <div className="toggleButton">
          <Toggle label="Just For You Hikes" onChange={setShowHikes}/>
        </div>
      </div>
        {showHikes ? (<HikeListContainer />) : null }
      <div>
        <Location/>
      </div>
    </div>
  );
}

export default App;
