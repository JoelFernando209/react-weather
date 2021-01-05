import React, { useState } from 'react';

import ClearStatus from '../assets/Clear.png';
import UbicationIcon from '../assets/ubication-icon.png';
import CloudBackground from '../assets/Cloud-background.png';
import SearchIcon from '../assets/search-icon.svg';

export const BannerStatus = () => {
  const [ searchMenuState, setSearchMenuState ] = useState(false);
  
  const searchButtonHandler = () => {
    setSearchMenuState(!searchMenuState);
  };
  
  let searchMenu = null;
  
  if(searchMenuState) {
    searchMenu = (
      <div className='bannerStatus__searchMenu searchMenu'>
        <div className='searchMenu__setData'>
          <div className='searchMenu__inputBox'>
            <img src={SearchIcon} alt='Search Icon' className='searchMenu__inputIcon' />
          
            <input type='text' className='searchMenu__searchInput' placeholder='search location' />
          </div>
        
          <button className='searchMenu__searchBtn btn btn--blue'>Search</button>
        </div>
      
      </div>
    )
  }
  
  return (
    <div className='bannerStatus'>
      <div className='bannerStatus__cloudBg' style={{ backgroundImage: `url(${CloudBackground})` }}></div>
      
      <div className='bannerStatus__searchBox'>
        <button onClick={searchButtonHandler} className='bannerStatus__searchButton btn btn--gray'>Search for Places</button>
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
  )
};