import React from 'react'
import Button from 'react-bootstrap/Button'
import Collapsible from 'react-collapsible';
import '../../App.css'
import * as _ from 'lodash'

// const recommendedGear = [
//   {
//     id: 1,
//     difficultyLevel: 'black',
//     clothing: 'URL',
//     walkingGear: 'URL',
//     hydrationLevel: 'URL',
//     shoes: 'URL',
//   },
//   {
//     id: 2,
//     difficultyLevel: 'black',
//     clothing: 'URL',
//     walkingGear: 'URL',
//     hydrationLevel: 'URL',
//     shoes: 'URL',
//     weather: '',
//   },
//   {
//     id: 3,
//     difficultyLevel: 'blue',
//     clothing: 'URL',
//     walkingGear: 'URL',
//     hydrationLevel: 'URL',
//     shoes: 'URL',
//   }
// ]

export default function HikeInfoItem({ info, navLink, clothing, waterlevel, walkinggear, shoes}){

  // call function to get recommended gear based on hike difficulty
  // function getGear() {
  //   const gear = _.filter(recommendedGear, {difficultyLevel: hikeDifficulty, weather: hikeWeather})
  //   return gear;
  // }
  // map through the recommended gear


  return (
    <>
      <div className="InfoPanel.seen">
        <div className="InfoBlurb"> {info} </div>
        <div className="NavigationLink">
          <Button className="NavButton" href = {navLink} target="_blank"> NAVIGATE </Button>
        </div>

        <Collapsible trigger="Gear Recommendations">
          <p>Clothing: {clothing}</p>
          <p>Hydration Level: {waterlevel}</p>
          <p>Walking Gear: {walkinggear} </p>
          <p>Shoes: {shoes} </p>
        </Collapsible>
        <div> MAP PLACE HOLDER SPACE </div>
      </div>
    </>
  )
}
