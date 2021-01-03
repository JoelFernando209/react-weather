import React from 'react';

export const ClimateInfo = () => (
  <div className='climateInfo'>
    <div className='climateInfo__temperatureOptions'>
      <div className='climateInfo__temperatureOption climateInfo__temperatureOption--celsius'>
        C°
      </div>
      
      <div className='climateInfo__temperatureOption climateInfo__temperatureOption--faren'>
        F°
      </div>
    </div>
    
    <div className='climateInfo__temperatureCards'></div>
    
  </div>
);