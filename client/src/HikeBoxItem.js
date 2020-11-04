import React from 'react'

export default function HikeBoxItem({ name, picURL, description, handleClick }){
  return (
    <div className="HikeItem" onClick={handleClick}>
      <div className="HikePic"> {picURL} </div>
      <div className="HikeName"> {name} </div>
      <div className="HikeDes"> {description} </div>
    </div>
  )
}
