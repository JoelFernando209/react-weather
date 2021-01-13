import React from 'react';

import { getUrlPhotoFromName } from '../../functions/apiFunctions';

import ClearStatus from '../../assets/Clear.png';

const StatusImg = ({ weatherObj }) => {
  let weatherImg = ClearStatus;
  
  if(weatherObj.consolidated_weather) {
    weatherImg = getUrlPhotoFromName(weatherObj.consolidated_weather[0].weather_state_name);
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