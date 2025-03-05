import React from 'react'
import Time from '../Time'
import TodaysWeather from '../TodaysWeather'

function HomePage({weather,setWeather}) {

    const researchWeather = (e) => {
        e.preventDefault();
        let newCity = e.target.city.value;

    }

  return (
    <div>
      <TodaysWeather weather={weather}/>
      <Time />
      <form action="" onSubmit={researchWeather}>
        <input type="text" name='city' />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default HomePage