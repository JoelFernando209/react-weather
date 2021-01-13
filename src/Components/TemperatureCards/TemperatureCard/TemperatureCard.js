import React from 'react';

const TemperatureCard = ({ day, imgSrc, maxTemp, minTemp, currentMeasure }) => (
  <div className='temperatureCard'>
    
    <div className='temperatureCard__day'>{day}</div>
    
    <img src={imgSrc} alt='Temperature Icon' className='temperatureCard__imgClimate' />
    
    <div className='temperatureCard__temp'>
      <span className='temperatureCard__maxTemp'>
        {currentMeasure === 'F°' ? ((maxTemp*1.8)+32).toFixed(1) : maxTemp } {currentMeasure}
      </span>
      
      <span className='temperatureCard__minTemp'>
        {currentMeasure === 'F°' ? ((minTemp*1.8)+32).toFixed(1) : minTemp } {currentMeasure}
      </span>
    </div>
    
  </div>
);

export default TemperatureCard;