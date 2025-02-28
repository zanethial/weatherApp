import React from 'react'
import SunInfoTile from '../SunInfoTile'

function SunInfoPage() {

    const days = [
      {dayOfWeek: 'Monday', sunsetTime: '6:45 AM', sunriseTime: '5:00 AM'},
      {dayOfWeek: 'Tuesday', sunsetTime:'5:00 AM', sunriseTime: '5:00 AM'},
      {dayOfWeek: 'Wensday', sunsetTime: '6:35 AM', sunriseTime: '5:00 AM'},
      {dayOfWeek: 'Thursday', sunsetTime: '5:00 AM', sunriseTime: '5:00 AM'},
      {dayOfWeek: 'Friday', sunsetTime:  '6:00 AM', sunriseTime: '5:00 AM'},
  ]

  const sunTiles = days.map(day => <SunInfoTile day={day} />  )

  return (
    <div>
      <p>These are the sun rise and sun set times for the week</p>
      <div>
        {sunTiles}
      </div>
    </div>
)
}
// https://i.pinimg.com/originals/71/21/85/712185683557a51c87a1d821a251d183.jpg
// https://th.bing.com/th/id/OIP.54uBzOX6lNghCKI2sA-lnAHaEo?rs=1&pid=ImgDetMain
// https://th.bing.com/th/id/OIP.DLggRBvTm1e7t0Xly9CicwHaE8?w=235&h=180&c=7&r=0&o=5&pid=1.7

export default SunInfoPage