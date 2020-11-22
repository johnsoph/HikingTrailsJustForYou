import React, {useState, Component} from 'react';
import './App.css';
import TitleBarItem from './components/header/TitleBarItem'
// import FilterBarItem from './components/FilterBarItem'
import HikeBoxItem from './components/page/HikeBoxItem'
import HikeInfoItem from './components/page/HikeInfoItem'
import TemplateComponent from './components/TemplateComponent'
import HikeListContainer from './components/page/HikeListContainer'
import { DirectionsButton } from './components/DirectionsButton'
import Location from './Location'
import Toggle from './Toggle'
import JustForYou from './components/page/JustForYou'
import { callAPI } from './utils/api'
import { DEFAULT_HIKES } from './common/mockHikes'
import { callZipAPI } from './utils/zipCoords'
import { Filter, FilterType} from './common/model'

function App() {
  
  const filterSelection: Filter = {
    desiredHikes: [],
    filterType: 2
  }  
  // const [showHikes, setShowHikes] = useState("")
  var lat = 0
  var longt = 0


  navigator.geolocation.getCurrentPosition(function(position) {
    lat  = position.coords.latitude
    longt  = position.coords.longitude
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });

  callAPI();
  callZipAPI(97701);

  return (
    <div className="container">
      <div className="titleBar">
        <TitleBarItem/>
      </div>

      <div className="filterBar">
        <JustForYou />
        <div className="toggleButton">
          {/* <Toggle label="Just For You Hikes" onChange={setShowHikes}/> */}
        </div>
      </div>
    {filterSelection.filterType !== FilterType.None ?(
      <HikeListContainer />
    ) : null }
      <div>
        <Location/>
      </div>
    </div>
  );
}

export default App;
