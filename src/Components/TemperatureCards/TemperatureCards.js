import React, { useEffect } from 'react';

import TemperatureCard from './TemperatureCard/TemperatureCard';

const TemperatureCards = ({ climateCards }) => {
  useEffect(() => {
    console.log('[TemperatureCards.js] useEffect');
  })
  
  return (
    <div className='climateInfo__temperatureCards'>
      {
        climateCards.map(card => {
          return (
            <TemperatureCard
              key={card.id}
              day={card.day}
              imgSrc={card.imgSrc}
              minTemp={card.minTemp}
              maxTemp={card.maxTemp}
            />
          )
        })
      }
    </div>
  )
};

export default TemperatureCards;