import React from 'react';

const HightlightsItem = ({ title, dataNumber, dataText, children = null }) => {
  
  return (
    <div className='hightlightsItem'>
      <div className='hightlightsItem__title'>{title}</div>
      
      <div className='hightlightsItem__dataNumber'>{dataNumber}<span className='hightlightsItem__dataText'> {dataText}</span></div>
      
      {
        children !== null ?
          <div className='hightlightsItem__addon'>{children}</div>
        :
          null
      }
    </div>
  )
}

export default HightlightsItem;