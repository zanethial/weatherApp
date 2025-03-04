import React, { useState, useEffect } from 'react';
import WeatherImages from './WeatherImages';

function App() {
  const [weatherCondition, setWeatherCondition] = useState("");

 
  const weatherImages = {
    sunny: "",
    rainy: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3iLei3uBVSOJf2v4l1_ERzs-dw-2VBHflgw&s",
    cloudy: "",
    snowy: "",
    stormy: "",
    default: ""  // Fallback image
  };

  useEffect(() => {
    // Simulated API call for weather condition (Replace with real API)
    async function fetchWeatherCondition() {
      try {
        const conditions = ["sunny", "rainy", "cloudy", "snowy", "stormy"];
        const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

        setWeatherCondition(randomCondition);
      } catch (error) {
        console.error("Error fetching weather condition:", error);
      }
    }

    fetchWeatherCondition();
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold p-4">Weather App</h1>
      <WeatherImages weatherCondition={weatherCondition} weatherImages={weatherImages} />
    </div>
  );
}

export default App;
