import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/pages/HomePage.jsx'
import SunInfoPage from './components/pages/SunInfoPage.jsx'
import WeeklyForecastPage from './components/pages/WeeklyForecastPage.jsx'

function App() {


  return (
    <div>
      <h2>Weather App</h2>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/forecast' element={<WeeklyForecastPage />} />
        <Route path='/sun' element={<SunInfoPage />} />
      </Routes>

    </div>
  )
}

export default App


//npm run dev = start server

//ctrl + / to comment out a comonent