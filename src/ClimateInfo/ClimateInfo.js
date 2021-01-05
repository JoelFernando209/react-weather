import React, { useState } from 'react';

import TemperatureCard from '../TemperatureCard/TemperatureCard';
import HightlightsItem from '../HightlightsItem/HightlightsItem';
import PercentageBar from '../PercentageBar/PercentageBar';

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
      title: 'Wind status',
      dataNumber: '990',
      dataText: 'mb'
    },
    {
      title: 'Wind status',
      dataNumber: '990',
      dataText: 'mb',
      addon: (
        <PercentageBar className='mg-md-top' widthPercentage='60' />
      )
    },
    {
      title: 'Wind status',
      dataNumber: '990',
      dataText: 'mb',
    },
    {
      title: 'Wind status',
      dataNumber: '990',
      dataText: 'mb',
    },
  ])
  
  return (
    <div className='climateInfo'>
      <div className='climateInfo__temperatureOptions'>
        <div className='climateInfo__temperatureOption climateInfo__temperatureOption--celsius'>
          C°
        </div>
        
        <div className='climateInfo__temperatureOption climateInfo__temperatureOption--faren'>
          F°
        </div>
      </div>
      
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
      
      
      <div className='climateInfo__dataClimate'>
        <div className='title-3 climateInfo__dataClimateTitle'>Today's Hightlights</div>
        
        <div class='climateInfo__dataClimateGrid'>
          {
            climateTodayData.map(data => {
              return (
                <HightlightsItem
                  title={data.title}
                  dataNumber={data.dataNumber}
                  dataText={data.dataText}
                >
                  {data.addon}
                </HightlightsItem>
              )
            })
          }
        </div>
      </div>
      
      <div class='climateInfo__footer'>Joel Dominguez @ DevChallenges.io | Powered by React</div>
    </div>
  )
};