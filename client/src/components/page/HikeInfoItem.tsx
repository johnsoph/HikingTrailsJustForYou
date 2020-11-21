import React from 'react'
import Button from 'react-bootstrap/Button'
import Collapsible from 'react-collapsible';
import '../../App.css'
import * as _ from 'lodash'

const recommendedGear = [
  {
    id: 1,
    difficultyLevel: 'black',
    clothing: 'URL',
    walkingGear: 'URL',
    hydrationLevel: 'URL',
    shoes: 'URL',
    weather: '',
  },
  {
    id: 2,
    difficultyLevel: 'black',
    clothing: 'URL',
    walkingGear: 'URL',
    hydrationLevel: 'URL',
    shoes: 'URL',
    weather: '',
  },
  {
    id: 3,
    difficultyLevel: 'blue',
    clothing: 'URL',
    walkingGear: 'URL',
    hydrationLevel: 'URL',
    shoes: 'URL',
  }
]

export default function HikeInfoItem({ name,summary,difficulty,rating,town,length,weather,navLink}){

  // call function to get recommended gear based on hike difficulty
  // function getGear() {
  //   const gear = _.filter(recommendedGear, {difficultyLevel: hikeDifficulty, weather: hikeWeather})
  //   return gear;
  // }
  // map through the recommended gear

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
          <p> Always Bring: </p>
          <ul>
          <li> A Large Backpack </li>
          <li> Snacks like Trail Mix, Peanut Butter Pretzels, Tuna Packets with Crackers, Apples and Nut Butter, Dried Fruit, Protein Bars, Jerky, Meat Sticks, or Mixed Nuts </li>
          <li> Navigation Tools like a Compass or a Map </li>
          <li> First Aid Kit </li>
          <li> Knife or a Mulitool </li>
          <li> Sun Protection like Sunglasses and/or Sunscreen </li>
          <li> Emergency Fire Starting tools like Matches, Lighter, and/or Tinder </li>
          </ul>
          {/*<p>Clothing: {clothing}</p>
          <p>Hydration Level: {waterlevel}</p>
          <p>Walking Gear: {walkinggear} </p>
          <p>Shoes: {shoes} </p>*/}
        </Collapsible>
        <div className="NavigationLink">
          <Button className="NavButton" href = {navLink} target="_blank"> NAVIGATE </Button>
        </div>
      </div>
    </>
  )
}
