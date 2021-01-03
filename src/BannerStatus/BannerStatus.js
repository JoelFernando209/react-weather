import React from 'react';

import ClearStatus from '../assets/Clear.png';
import UbicationIcon from '../assets/ubication-icon.png';
import CloudBackground from '../assets/Cloud-background.png';

import '../scss/main.scss';

export const BannerStatus = () => (
  <div className='bannerStatus'>
    <div className='bannerStatus__cloudBg' style={{ backgroundImage: `url(${CloudBackground})` }}></div>
    
    <div className='bannerStatus__searchBox'>
      <button className='bannerStatus__searchButton btn btn--gray'>Search for Places</button>
    </div>
    
    <img src={ClearStatus} alt='Clear' className='bannerStatus__statusImg' />
    
    <div className='bannerStatus__temperature'>
      15
      <span className='bannerStatus__temperatureIcon'>C°</span>
    </div>
    
    <div className='bannerStatus__temperatureName'>Shower</div>
    
    <div className='bannerStatus__ubicationInfo'>
      <div className='bannerStatus__date'>
        Today Fri, 5 Jun
      </div>
      
      <div className='bannerStatus__ubicationCity'>
        <img src={UbicationIcon} alt='Ubication Icon' className='bannerStatus__ubicationIcon' />
        
        <span className='bannerStatus__ubicationName'>Helsinki</span>
      </div>
    </div>
  </div>
);