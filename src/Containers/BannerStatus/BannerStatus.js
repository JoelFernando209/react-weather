import React, { useState, useEffect } from 'react';

import CloudBackground from '../../assets/Cloud-background.png';

import SearchMenu from '../../Components/SearchMenu/SearchMenu';
import UbicationInfo from '../../Components/UbicationInfo/UbicationInfo';
import StatusImg from '../../Components/StatusImg/StatusImg';

import WoeidContext from '../../context/woeid-context';

export const BannerStatus = ({ dataClimate, setDataClimate, currentWoeid, changeWoeid }) => {
  const [ searchMenuState, setSearchMenuState ] = useState(false);
  const [ searchValue, setSearchValue ] = useState('london');
  const [ resultSearch, setResultSearch ] = useState([]);
  
  useEffect(() => {
    if(currentWoeid !== 0) {
      fetch(`https://www.metaweather.com/api/location/${currentWoeid}/`)
      .then(res => res.json())
      .then(data => setDataClimate(data))
    }
    
  }, [currentWoeid, setDataClimate]);
  
  useEffect(() => {
    fetch('https://www.metaweather.com/api/location/44418/')
    .then(res => res.json())
    .then(data => setDataClimate(data))
    
  }, [setDataClimate]);
  
  const changeSearchValue = input => {
    setSearchValue(input);
  };
  
  const searchButtonHandler = () => {
    setSearchMenuState(!searchMenuState);
  };
  
  return (
    <div className='bannerStatus'>
      <div className='bannerStatus__cloudBg' style={{ backgroundImage: `url(${CloudBackground})` }}></div>
      
      <WoeidContext.Provider value={{
        woeid: currentWoeid,
        changeWoeid,
        resultSearch,
        changeSearchValue
      }}>
        <SearchMenu
          searchMenuState={searchMenuState}
          setSearchMenu={searchButtonHandler}
          searchValue={searchValue}
          setResultSearch={setResultSearch}
        />
      </WoeidContext.Provider>
      
      <div className='bannerStatus__searchBox'>
        <button onClick={searchButtonHandler} className='bannerStatus__searchButton btn btn--gray'>Search for Places</button>
      </div>
      
      <StatusImg weatherObj={dataClimate} />
      
      <div className='bannerStatus__temperature'>
        {
          dataClimate.consolidated_weather ?
            dataClimate.consolidated_weather[0].the_temp.toFixed(0)
          :
            '0'
        }
        <span className='bannerStatus__temperatureIcon'>C°</span>
      </div>
      
      <div className='bannerStatus__temperatureName'>
        {
          dataClimate.consolidated_weather ?
            dataClimate.consolidated_weather[0].weather_state_name
          :
            ''
        }
      </div>
      
      <UbicationInfo weatherObj={dataClimate} />
    </div>
  )
};