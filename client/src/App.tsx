import React from 'react';
import './App.css';
import TitleBarItem from './components/header/TitleBarItem'
import HikeListContainer from './components/page/HikeListContainer'
import Location from './Location'
import JustForYou from './components/page/JustForYou'
import { callAPI } from './utils/api'
import { callZipAPI } from './utils/zipCoords'
import { Filter, FilterType} from './common/model'


function App() {
  
  // const filterSelection: Filter = {
  //   desiredHikes: [],
  //   filterType: 0
  // }  

  var lat = 0
  var longt = 0


  navigator.geolocation.getCurrentPosition(function(position) {
    lat  = position.coords.latitude
    longt  = position.coords.longitude
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });

  //callZipAPI(97701);

  return (
    <div className="container">
      <div className="titleBar">
        <TitleBarItem/>
      </div>
      <div className="filterBar">
        <JustForYou />
      </div>
      <HikeListContainer/>
      <div>
        <Location/>
      </div>
    </div>
  );
}

export default App;
