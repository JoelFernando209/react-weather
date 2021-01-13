import React from 'react';

const LoadingPage = ({ loadingStatus }) => {
  
  let styleLoading = {};
  
  if(loadingStatus) {
    styleLoading = {
      opacity: '1',
      visibility: 'visible',
    }
  } else {
    styleLoading = {
      opacity: '0',
      visibility: 'hidden'
    }
  }
  
  return (
    <div className='loading' style={styleLoading}>
      <div className='loading__content'>
        <img src='https://www.metaweather.com/static/img/weather/c.svg' alt='ReactWeather Logo' className='loading__logo' />
        <span className='loading__title'>ReactWeather</span>
        <span className='loading__warning'>Loading...</span>
      </div>
    </div>
  )
};

export default LoadingPage;