import React from 'react'

const CurrentweatherCard = ({currentWeather}) => {
  return (
    <div>{JSON.stringify(currentWeather, null, 2)}</div>
  )
}

export default CurrentweatherCard