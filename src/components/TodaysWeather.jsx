import React from 'react'

function TodaysWeather({weather}) {

    if (!weather) return null;

    const {condition,icon,name,temp,time} = weather;

  return (
    <div>
        <h2>{name}</h2>
        <h1>{condition}</h1>
        <img src={icon} alt="" />
        <h1>{temp} F</h1>
    </div>
  )
}

export default TodaysWeather