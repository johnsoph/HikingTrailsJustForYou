import React from 'react'
import Button from 'react-bootstrap/Button'
import Collapsible from 'react-collapsible';

export default function HikeInfoItem({ info, navLink, clothing, waterlevel, walkinggear, shoes}){
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
