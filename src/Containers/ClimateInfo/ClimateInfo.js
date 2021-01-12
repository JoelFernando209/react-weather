import React, { useState } from 'react';

import TemperatureCards from '../../Components/TemperatureCards/TemperatureCards';
import HightlightsItems from '../../Components/HightlightsItems/HightlightsItems';
import Footer from '../../Components/Footer/Footer';
import TemperatureOptions from '../../Components/TemperatureOptions/TemperatureOptions';

import PercentageBar from '../../Components/Widgets/PercentageBar/PercentageBar';

export const ClimateInfo = () => {
  const [ climateCards ] = useState([
    {
      id: 1,
      day: 'hijo',
      imgSrc: 'Clear',
      minTemp: '16°C',
      maxTemp: '11°C'
    },
    {
      id: 2,
      day: 'de',
      imgSrc: 'Clear',
      minTemp: '16°C',
      maxTemp: '11°C'
    },
    {
      id: 3,
      day: 'la',
      imgSrc: 'Clear',
      minTemp: '16°C',
      maxTemp: '11°C'
    },
    {
      id: 4,
      day: 'chinita',
      imgSrc: 'Clear',
      minTemp: '16°C',
      maxTemp: '11°C'
    },
    {
      id: 5,
      day: 'hilaria',
      imgSrc: 'Clear',
      minTemp: '16°C',
      maxTemp: '11°C'
    },
  ])
  
  const [ climateTodayData ] = useState([
    {
      id: '1',
      title: 'Wind status',
      dataNumber: '990',
      dataText: 'mb'
    },
    {
      id: '2',
      title: 'Wind status',
      dataNumber: '990',
      dataText: 'mb',
      addon: (
        <PercentageBar widthPercentage='60' />
      )
    },
    {
      id: '3',
      title: 'Wind status',
      dataNumber: '990',
      dataText: 'mb',
    },
    {
      id: '4',
      title: 'Wind status',
      dataNumber: '990',
      dataText: 'mb',
    },
  ])
  
  return (
    <div className='climateInfo'>
      <TemperatureOptions />
      
      <TemperatureCards climateCards={climateCards} />
      
      <div className='climateInfo__dataClimate'>
        <div className='title-3 climateInfo__dataClimateTitle'>Today's Hightlights</div>
        
        <HightlightsItems hightlightsData={climateTodayData} />
      </div>
      
      <Footer />
    </div>
  )
};