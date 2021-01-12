import React from 'react';

import HightlightsItem from './HightlightsItem/HightlightsItem';

const HightlightsItems = ({ hightlightsData }) => (
  <div className='climateInfo__dataClimateGrid'>
    {
      hightlightsData.map(data => {
        return (
          <HightlightsItem
            key={data.id}
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
);

export default HightlightsItems;