import React from 'react'
import Button from 'react-bootstrap/Button'
import Collapsible from 'react-collapsible';

export default function HikeInfoItem({ info, navLink}){
  return (
    <>
      <div className="InfoPanel.seen">
        <div className="InfoBlurb"> {info} </div>
        <div className="NavigationLink">
          <Button className="NavButton" href = {navLink} target="_blank"> NAVIGATE </Button>
        </div>
        <Collapsible trigger="Gear Recommendations">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
        <div> map </div>
      </div>
    </>
  )
}
