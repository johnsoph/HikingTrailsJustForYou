import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Collapsible from 'react-collapsible';
import { DirectionsButton } from './DirectionsButton';
import '../../App.css'
import * as _ from 'lodash'
import Location from '../../Location'

const tempDate = new Date();
const month = (tempDate.getMonth()+1)
var lat = 0
var longt = 0
var season = 'LOADING'

const recommendedGear = [
  {
    id: 1,
    difficultyLevel: 'green',
    season: 'winter',
    clothing: 'Wind breaker, long pants, jacket, multiple layers',
    clothingLINK: "#",
    walkingGear: 'None',
    hydrationLevel: 'Water bottle or small hydration pack',
    shoes: 'Running Shoes or Water Proof Shoes',
  },
  {
    id: 2,
    difficultyLevel: 'green',
    season: 'summer',
    clothing: 'Comfortable Clothes, shorts, t-shirt, hat, sunglasses',
    walkingGear: 'None',
    hydrationLevel: 'Water bottle or medium hydration pack',
    shoes: 'Running Shoes or Comfortable Shoes',
  },
  {
    id: 3,
    difficultyLevel: 'greenBlue',
    season: 'winter',
    clothing: 'Wind breaker, long pants, jacket, multiple layers',
    walkingGear: 'None',
    hydrationLevel: 'Water bottle or medium hydration pack',
    shoes: 'Running Shoes or Water Proof Shoes or Hiking Boots',
  },
  {
    id: 4,
    difficultyLevel: 'greenBlue',
    season: 'summer',
    clothing: 'Comfortable Clothes, shorts, t-shirt, hat, sunglasses',
    walkingGear: 'None',
    hydrationLevel: 'Water bottle or medium hydration pack',
    shoes: 'Running Shoes',
  },
  {
    id: 5,
    difficultyLevel: 'blue',
    season: 'winter',
    clothing: 'Wind breaker, long pants, heavy jacket, multiple layers, beanie, gloves',
    walkingGear: 'None',
    hydrationLevel: 'Large Water bottle or Full hydration pack',
    shoes: 'Running Shoes or Water Proof Shoes or Hiking Boots',
  },
  {
    id: 6,
    difficultyLevel: 'blue',
    season: 'summer',
    clothing: 'Comfortable Clothes, shorts, t-shirt, large brimmed hat, sunglasses, sun screen',
    walkingGear: 'None',
    hydrationLevel: 'Water bottle or full hydration pack',
    shoes: 'Running Shoes',
  },
  {
    id: 7,
    difficultyLevel: 'blueBlack',
    season: 'winter',
    clothing: 'Wind breaker, Quick-Drying long pants, heavy jacket, multiple layers, beanie, gloves',
    walkingGear: 'Walking Sticks',
    hydrationLevel: 'Large Water bottle or Full hydration pack',
    shoes: 'Hiking Boots',
  },
  {
    id: 8,
    difficultyLevel: 'blueBlack',
    season: 'summer',
    clothing: 'Comfortable Clothes, shorts or long pants, t-shirt or long sleeved shirt, large brimmed hat, sunglasses, sun screen',
    walkingGear: 'Walking Sticks',
    hydrationLevel: 'Large Water bottle or full hydration pack',
    shoes: 'Running Shoes',
  },
  {
    id: 9,
    difficultyLevel: 'black',
    season: 'winter',
    clothing: 'Wind breaker, Quick-Drying long pants, fleeced heavy jacket, multiple layers, beanie, gloves, warm socks',
    walkingGear: 'Walking Sticks',
    hydrationLevel: 'Large Water bottle, Full hydration pack, or water filter',
    shoes: 'Hiking Boots and/or Gaiters',
  },
  {
    id: 10,
    difficultyLevel: 'black',
    season: 'summer',
    clothing: 'Comfortable Clothes, shorts or long pants, t-shirt or long sleeved shirt, large brimmed hat, sunglasses, sun screen',
    walkingGear: 'Walking Sticks',
    hydrationLevel: 'Large Water bottle or full hydration pack',
    shoes: 'Running Shoes',
  },
  {
    id: 11,
    difficultyLevel: 'blackBlack',
    season: 'winter',
    clothing: 'Wind breaker, Quick-Drying long pants, fleeced heavy jacket, multiple layers, beanie, gloves, warm socks',
    walkingGear: 'Walking Sticks',
    hydrationLevel: 'Large Water bottle, Full hydration pack, or water filter',
    shoes: 'Hiking Boots and/or Gaiters',
  },
  {
    id: 12,
    difficultyLevel: 'blackBlack',
    season: 'summer',
    clothing: 'Comfortable Clothes, shorts or long pants, t-shirt or long sleeved shirt, large brimmed hat, sunglasses, sun screen',
    walkingGear: 'Walking Sticks',
    hydrationLevel: 'Large Water bottle or full hydration pack',
    shoes: 'Running Shoes',
  }
]


const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
      return latitude > 0 ? 'summer' : 'winter';
  }
  else {
      return latitude > 0 ? 'winter' : 'summer';
  }
    }


export default function HikeInfoItem({ name,summary,difficulty,rating,town,length,weather,navLink}){
  navigator.geolocation.getCurrentPosition(function(position) {
    lat  = position.coords.latitude
    longt  = position.coords.longitude
  });
  season = getSeason(lat, new Date().getMonth());

  // call function to get recommended gear based on hike difficulty
  // function getGear() {
  //   const gear = _.filter(recommendedGear, {difficultyLevel: hikeDifficulty, weather: hikeWeather})
  //   return gear;
  // }
  // map through the recommended gear
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
          {recommendedGear.filter(rec => rec.difficultyLevel == subDif.difficulty && rec.season == subSeason.season).map(recGot =>(
          <ul>
            <li> Clothing: {recGot.clothing} </li>
            <li> Walking Gear: {recGot.walkingGear} </li>
            <li> Water: {recGot.hydrationLevel} </li>
            <li> Shoes: {recGot.shoes} </li>
          </ul>
          ))}
          {/*<p>Clothing: {clothing}</p>
          <p>Hydration Level: {waterlevel}</p>
          <p>Walking Gear: {walkinggear} </p>
          <p>Shoes: {shoes} </p>*/}
        </Collapsible>
        <div className="NavigationLink">
          <Button className="NavButton" href = {navLink} target="_blank"> MORE INFO </Button>
        </div>
      </div>
    </>
  )
}
