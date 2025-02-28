import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/pages/HomePage.jsx'
import SunInfoPage from './components/pages/SunInfoPage.jsx'
import WeeklyForecastPage from './components/pages/WeeklyForecastPage.jsx'
import Navbar from './components/Navbar.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

    let apiKEY = 'c38d3fa7fcef4da596220631252602';

    let [weather,setWeather] = useState(null)

    useEffect(() => {
        let zipcode = 'Chiang Mai'
        let url = `http://api.weatherapi.com/v1/current.json?key=${apiKEY}&q=${zipcode}&aqi=yes`

        const getData = async () => {
            let res = await axios.get(url)
            console.log(res.data)
            let newWeather = {
                name: res.data.location.name,
                time: res.data.location.localtime,
                temp: res.data.current.temp_f,
                condition: res.data.current.condition.text,
                icon: res.data.current.condition.icon
            }
            setWeather(newWeather)
        }

        getData();

    },[])

  return (
    <div>
      <h2>Weather App</h2>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage weather={weather} />} />
        <Route path='/forecast' element={<WeeklyForecastPage />} />
        <Route path='/sun' element={<SunInfoPage />} />
      </Routes>

    </div>
  )
}

export default App


//npm run dev = start server

//ctrl + / to comment out a comonent