import React, { useContext, useRef } from 'react';

import SearchIcon from '../../assets/search-icon.svg';

import WoeidContext from '../../context/woeid-context';

const SearchInputData = () => {
  const searchInputRef = useRef(null);
  
  const idContext = useContext(WoeidContext);
  
  const getInputSearchVal = () => {
    const inputVal = searchInputRef.current.value;
    
    idContext.changeSearchValue(inputVal);
  }
  
  return (
    <div className='searchMenu__setData'>
      <div className='searchMenu__inputBox'>
        <img src={SearchIcon} alt='Search Icon' className='searchMenu__inputIcon' />
      
        <input type='text' ref={searchInputRef} className='searchMenu__searchInput' placeholder='search location' />
      </div>
    
      <button className='searchMenu__searchBtn btn btn--blue' onClick={getInputSearchVal}>Search</button>
    </div>
  )
  
};

export default SearchInputData;