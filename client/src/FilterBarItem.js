import React from 'react'

export default function FilterBarItem(){
  return (
    <div className="FilterBar">
      <select name="hiking_vibe" id="hiking_vibe">
        <option value="easy_and_chill">Easy and Chill</option>
        <option value="best_match">Best Match My Fitness Level</option>
        <option value="challenge_me">Challenge Me</option>
      </select>
      <input type="text" placeholder="Zip Code"/>
            <p> Just For You Hikes </p>
            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>
    </div>
  )
}
