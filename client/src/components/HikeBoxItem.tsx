import React from 'react'

export default function HikeBoxItem({ name, picURL, description, handleClick }){
  return (
    <div className="HikeItem" onClick={handleClick}>
      <div className="HikePic"> TODO - ADD PICTURE
      {/* <img scr={picURL} alt="new" width="50" height="60"/>  */}
      </div>
      <div className="HikeName"> {name} </div>
      <div className="HikeDes"> {description} </div>
    </div>
  )
}
