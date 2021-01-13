import React, { useEffect } from 'react';

const TemperatureOptions = ({ setMeasure, currentMeasure }) => {
  useEffect(() => {
    console.log('[TemperatureOptions.js] useEffect');
  })
  
  let styleCelsius = {};
  let styleFaren = {};
  
  if(currentMeasure === 'C°') {
    styleCelsius = {
      backgroundColor: '#E7E7EB',
      color: '#110E3C'
    }
  } else {
    styleFaren = {
      backgroundColor: '#E7E7EB',
      color: '#110E3C'
    }
  }
  
  return (
    <div className='temperatureOptions'>
      <div className='temperatureOption temperatureOption--celsius' style={styleCelsius} onClick={setMeasure.bind(null, 'C°')}>
        C°
      </div>
      
      <div className='temperatureOption temperatureOption--faren' style={styleFaren} onClick={setMeasure.bind(null, 'F°')}>
        F°
      </div>
    </div>
  )
}

export default React.memo(TemperatureOptions);