import React, { useEffect } from 'react';

const TemperatureOptions = () => {
  useEffect(() => {
    console.log('[TemperatureOptions.js] useEffect');
  })
  
  return (
    <div className='temperatureOptions'>
      <div className='temperatureOption temperatureOption--celsius'>
        C°
      </div>
      
      <div className='temperatureOption temperatureOption--faren'>
        F°
      </div>
    </div>
  )
}

export default TemperatureOptions;