import React from 'react'

function ForecastDayTile({thisDay}) {

    const {icon,temp,condition,day} = thisDay;


  return (
    <div>
        {day} {icon} | {temp} | {condition}
    </div>
  )
}
// https://th.bing.com/th/id/R.9a866ddaad270249dacbf8c73a7fdf9e?rik=wcPfTI1891vr2w&pid=ImgRaw&r=0
export default ForecastDayTile