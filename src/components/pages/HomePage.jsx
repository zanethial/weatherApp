import React from 'react'
import Time from '../Time'
import TodaysWeather from '../TodaysWeather'

function HomePage({weather}) {
  return (
    <div>
      <TodaysWeather weather={weather}/>
      <Time />
    </div>
  )
}

export default HomePage