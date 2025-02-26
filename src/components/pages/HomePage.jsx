import React from 'react'
import Time from '../Time'
import TodaysWeather from '../TodaysWeather'

function HomePage() {
  return (
    <div>
      <TodaysWeather/>
      <Time />
    </div>
  )
}

export default HomePage