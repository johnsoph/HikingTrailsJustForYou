import React from 'react'
import Collapsible from 'react-collapsible';
import { DirectionsButton } from './DirectionsButton'

export default function HikeInfoItem({ info, destination, clothing, waterlevel, walkinggear, shoes}){
  return (
    <>
      <div className="InfoPanel.seen">
        <div className="InfoBlurb"> {info} </div>
        <DirectionsButton destination={destination} />
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
