import React from 'react';
import ForecastDayTile from './ForecastDayTile';

function ForecastGrid() {

  const weatherData = [
    { icon: '☀️', temp: '85°', condition: 'Sunny', day: 'Monday' },
    { icon: '☀️', temp: '90°', condition: 'Sunny', day: 'Tuesday' },
    { icon: '☀️', temp: '78°', condition: 'Sunny', day: 'Monday' },
    { icon: '☀️', temp: '82°', condition: 'Sunny', day: 'Monday' },
    { icon: '☀️', temp: '88°', condition: 'Sunny', day: 'Monday' },
  ];

  const showDayTiles = weatherData.map(day => <ForecastDayTile thisDay={day} /> )

  return (
    <div>
      This is the ForcastGrid
      <div>
        {showDayTiles}
      </div>
    </div>
  )
}

export default ForecastGrid;
