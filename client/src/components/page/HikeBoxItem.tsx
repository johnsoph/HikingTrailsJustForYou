import React from 'react'
import '../../App.css'

const renderImage = (picURL)=>{
  return (
    <div className="HikePic">
      <img src={picURL} width="120" height="120"></img>
    </div>
  )
}

export default function HikeBoxItem({ name, picURL, description, handleClick }){
  return (
    <div className="HikeItem" onClick={handleClick}>
      {picURL ? (renderImage(picURL)) : null }
      <div className="HikeName"> {name} </div>
      <div className="HikeDes"> {description} </div>
    </div>
  )
}
