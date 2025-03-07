import React from 'react'
import Time from '../Time'
import TodaysWeather from '../TodaysWeather'

function HomePage({weather,setLocation}) {

    const researchWeather = (e) => {
        e.preventDefault();
        let newCity = e.target.city.value;
        setLocation(newCity)
    }

  return (
    <div className='homePage'>
      <TodaysWeather weather={weather}/>
      {/* <Time /> */}
      <form action="" onSubmit={researchWeather}>
        <input type="text" name='city' />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default HomePage