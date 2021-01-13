import React from 'react';
import { generateId } from '../../functions/apiFunctions';

import HightlightsItem from './HightlightsItem/HightlightsItem';
import PercentageBar from '../Widgets/PercentageBar/PercentageBar';

const HightlightsItems = ({ hightlightsData }) => {
  
  const formatTitle = title => {
    const uppercaseName = title.charAt(0).toUpperCase() + title.slice(1);
    
    return uppercaseName.replace('_', ' ');
  }
  
  if(hightlightsData) {
    var { wind_speed, humidity, visibility, air_pressure } = hightlightsData[0];
    var data = { wind_speed, humidity, visibility, air_pressure };
    var dataTitles = Object.keys(data);
    
    var dataMeasure = {
      wind_speed: 'mph',
      humidity: '%',
      visibility: 'miles',
      air_pressure: 'mb'
    }
    
    var dataAddons = {
      humidity: (
        <PercentageBar widthPercentage={humidity} />
      )
    }
  }
  
  return (
    <div className='climateInfo__dataClimateGrid'>
      {
        hightlightsData ?
          dataTitles.map(title => {
            return (
              <HightlightsItem
                key={generateId()}
                title={formatTitle(title)}
                dataNumber={data[title].toFixed(0)}
                dataText={dataMeasure[title]}
              >
                {dataAddons[title] ? dataAddons[title] : null}
              </HightlightsItem>
            )
          })
        :
          null
      }
    </div>
  )
};

export default HightlightsItems;