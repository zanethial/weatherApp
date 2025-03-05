import React, { useState, useEffect } from 'react';
import WeatherImages from './WeatherImages';

const weatherImages = {
    sunny: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzui_PY_KhdCsidvrcI41gnMKlzBUC-E4uhA&s",
    rainy: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3iLei3uBVSOJf2v4l1_ERzs-dw-2VBHflgw&s",
    cloudy: "https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/sky-1107579_1920.jpg?strip=1&w=640",
    snowy: "",
    stormy: "",
    default: ""  // Fallback image
  };

// function App() {
//   const [weatherCondition, setWeatherCondition] = useState("");

 


//   useEffect(() => {
//     // Simulated API call for weather condition (Replace with real API)
//     async function fetchWeatherCondition() {
//       try {
//         const conditions = ["sunny", "rainy", "cloudy", "snowy", "stormy"];
//         const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

//         setWeatherCondition(randomCondition);
//       } catch (error) {
//         console.error("Error fetching weather condition:", error);
//       }
//     }

//     fetchWeatherCondition();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold p-4">Weather App</h1>
//       <WeatherImages weatherCondition={weatherCondition} weatherImages={weatherImages} />
//     </div>
//   );
// }

// export default App;
