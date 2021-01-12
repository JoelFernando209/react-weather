import React from 'react';
import { format } from 'date-fns';

import UbicationIcon from '../../assets/ubication-icon.png';

const UbicationInfo = ({ weatherObj }) => (
  <div className='ubicationInfo'>
    <div className='ubicationInfo__date'>
      Today {
        weatherObj.consolidated_weather ?
          format(new Date(weatherObj.consolidated_weather[0].applicable_date), 'EEE, dd MMM')
        :
          ''
      }
    </div>
    
    <div className='ubicationInfo__ubicationCity'>
      <img src={UbicationIcon} alt='Ubication Icon' className='ubicationInfo__ubicationIcon' />
      
      <span className='ubicationInfo__ubicationName'>{
        weatherObj ?
          weatherObj.title
        :
          ''
      }</span>
    </div>
  </div>
);

export default UbicationInfo;