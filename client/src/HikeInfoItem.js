import React from 'react'

export default function HikeInfoItem({ info, navLink}){
  return (
    <>
      <div className="InfoPanel.seen">
        <div className="InfoBlurb"> {info} </div>
        <div className="NavigationLink"> {navLink} <button> NAVIGATE </button> </div>
      </div>
    </>
  )
}
