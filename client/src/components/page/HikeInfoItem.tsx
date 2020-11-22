import React from 'react'
import Button from 'react-bootstrap/Button'
import Collapsible from 'react-collapsible';
import { DirectionsButton } from './DirectionsButton';
import '../../App.css'
import 'lodash'
import { recommendedGear } from '../.././common/recommendedGear'

var lat = 0
var season = 'LOADING'




const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
      return latitude > 0 ? 'summer' : 'winter';
  }
  else {
      return latitude > 0 ? 'winter' : 'summer';
  }
}


export default function HikeInfoItem({ name,summary,difficulty,rating,town,length,weather,navLink, destination}){
  navigator.geolocation.getCurrentPosition(function(position) {
    lat  = position.coords.latitude
  });
  season = getSeason(lat, new Date().getMonth());
  const subDif = JSON.parse(JSON.stringify({difficulty}))
  const subSeason = JSON.parse(JSON.stringify({season}))

  return (
    <>
      <div className="InfoPanel.seen">
        <div className="InfoBlurb">
          <p>{name}</p>
          <p>Summary: {summary}</p>
          <p>Difficulty: {difficulty}</p>
          <p>Rating: {rating}/5</p>
          <p>Located at: {town}</p>
          <p>Length: {length} miles</p>
        </div>
        <DirectionsButton destination={destination} />
        <Collapsible trigger="Gear Recommendations">
          <p> Always Think About Bring: </p>
          <ul>
          <li> A Large Backpack </li>
          <li> Snacks like Trail Mix, Peanut Butter Pretzels, Tuna Packets with Crackers, Apples and Nut Butter, Dried Fruit, Protein Bars, Jerky, Meat Sticks, or Mixed Nuts </li>
          <li> Navigation Tools like a Compass or a Map </li>
          <li> First Aid Kit </li>
          <li> Knife or a Mulitool </li>
          <li> Sun Protection like Sunglasses and/or Sunscreen </li>
          <li> Emergency Fire Starting tools like Matches, Lighter, and/or Tinder </li>
          </ul>
          <p> For this Hike: </p>
          {recommendedGear.filter(rec => rec.difficultyLevel === subDif.difficulty && rec.season === subSeason.season).map(recGot =>(
          <ul>
            <li> Clothing: {recGot.clothing} </li>
            <li> Walking Gear: {recGot.walkingGear} </li>
            <li> Water: {recGot.hydrationLevel} </li>
            <li> Shoes: {recGot.shoes} </li>
          </ul>
          ))}
        </Collapsible>
        <div className="NavigationLink">
          <Button className="NavButton" href = {navLink} target="_blank"> MORE INFO </Button>
        </div>
      </div>
    </>
  )
}
