import React from 'react';

import ClearStatus from '../../assets/Clear.png';

const StatusImg = ({ weatherObj }) => {
  let weatherImg = ClearStatus;
  
  if(weatherObj.consolidated_weather) {
    switch (weatherObj.consolidated_weather[0].weather_state_name) {
      case 'Snow':
        weatherImg = 'https://www.metaweather.com/static/img/weather/sn.svg';
      break;
      case 'Sleet':
        weatherImg = 'https://www.metaweather.com/static/img/weather/sl.svg';
      break;
      case 'Hail':
        weatherImg = 'https://www.metaweather.com/static/img/weather/h.svg';
      break;
      case 'Thunderstorm':
        weatherImg = 'https://www.metaweather.com/static/img/weather/t.svg';
      break;
      case 'Heavy Rain':
        weatherImg = 'https://www.metaweather.com/static/img/weather/hr.svg';
      break;
      case 'Light Rain':
        weatherImg = 'https://www.metaweather.com/static/img/weather/lr.svg';
      break;
      case 'Showers':
        weatherImg = 'https://www.metaweather.com/static/img/weather/s.svg';
      break;
      case 'Heavy Cloud':
        weatherImg = 'https://www.metaweather.com/static/img/weather/hc.svg';
      break;
      case 'Light Cloud':
        weatherImg = 'https://www.metaweather.com/static/img/weather/lc.svg';
      break;
      case 'Clear':
        weatherImg = 'https://www.metaweather.com/static/img/weather/c.svg';
      break;
      default:
        weatherImg = 'https://www.metaweather.com/static/img/weather/c.svg';
    }
  }
  
  return (
    <img
      src={weatherImg}
      alt={weatherObj.title}
      className='bannerStatus__statusImg'
    />
  )
};

export default StatusImg;