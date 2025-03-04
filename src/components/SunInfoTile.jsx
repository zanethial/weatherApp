import React from 'react';
import SunInfoTile from './SunInfoTile';

function SunInfoContainer() {
  const sunData = {
    dayOfWeek: "Monday",
    sunriseTime: "6:30 AM",
    sunsetTime: "6:45 PM"
  };

  return (
    <div className="flex justify-center p-4">
      <SunInfoTile day={sunData} />
    </div>
  );
}

export default SunInfoContainer