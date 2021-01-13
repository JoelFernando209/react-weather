import React from 'react';
import { format } from 'date-fns';
import { getUrlPhotoFromName } from '../../functions/apiFunctions';

import TemperatureCard from './TemperatureCard/TemperatureCard';

const TemperatureCards = ({ climateCards, currentMeasure }) => {
  return (
    <div className='climateInfo__temperatureCards'>
      {
        climateCards ?
          climateCards.slice(1).map(card => {
            return (
              <TemperatureCard
                key={card.id}
                day={format(new Date(card.applicable_date), 'EEE, dd MMM')}
                imgSrc={getUrlPhotoFromName(card.weather_state_name)}
                minTemp={card.min_temp.toFixed(0)}
                maxTemp={card.max_temp.toFixed(0)}
                currentMeasure={currentMeasure}
              />
            )
          })
        :
          null
      }
    </div>
  )
};

export default React.memo(TemperatureCards);