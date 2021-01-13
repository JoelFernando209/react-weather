import React from 'react';

import TemperatureCards from '../../Components/TemperatureCards/TemperatureCards';
import HightlightsItems from '../../Components/HightlightsItems/HightlightsItems';
import Footer from '../../Components/Footer/Footer';
import TemperatureOptions from '../../Components/TemperatureOptions/TemperatureOptions';

export const ClimateInfo = ({ dataClimate, setCurrentTempMeasure, currentTempMeasure }) => {
  return (
    <div className='climateInfo'>
      <TemperatureOptions setMeasure={setCurrentTempMeasure} currentMeasure={currentTempMeasure} />
      
      <TemperatureCards climateCards={dataClimate.consolidated_weather} currentMeasure={currentTempMeasure} />
      
      <div className='climateInfo__dataClimate'>
        <div className='title-3 climateInfo__dataClimateTitle'>Today's Hightlights</div>
        
        <HightlightsItems hightlightsData={dataClimate.consolidated_weather} />
      </div>
      
      <Footer />
    </div>
  )
};