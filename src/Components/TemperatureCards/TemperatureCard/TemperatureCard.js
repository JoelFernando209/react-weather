import React from 'react';
import HeavyCloud from '../../../assets/HeavyCloud.png';

const TemperatureCard = ({ day, imgSrc, maxTemp, minTemp }) => {
  
  return (
    <div className='temperatureCard'>
      
      <div className='temperatureCard__day'>{day}</div>
      
      <img src={HeavyCloud} alt='Temperature Icon' className='temperatureCard__imgClimate' />
      
      <div className='temperatureCard__temp'>
        <span className='temperatureCard__maxTemp'>
          {maxTemp}
        </span>
        
        <span className='temperatureCard__minTemp'>
          {minTemp}
        </span>
      </div>
      
    </div>
  )
};

export default TemperatureCard;