import React from 'react';

import SearchIcon from '../../assets/search-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';

const SearchMenu = ({ searchMenuState, setSearchMenu }) => {
  const classesSearchMenu = [];
  
  classesSearchMenu.push('searchMenu');
  
  if(searchMenuState) {
    classesSearchMenu.push('visible');
  } else {
    classesSearchMenu.push('invisible');
  }
  
  return (
    <div className={classesSearchMenu.join(' ')}>
      <img onClick={setSearchMenu} src={CloseIcon} alt='Exit Search Menu' className='searchMenu__exit' />
    
      <div className='searchMenu__setData'>
        <div className='searchMenu__inputBox'>
          <img src={SearchIcon} alt='Search Icon' className='searchMenu__inputIcon' />
        
          <input type='text' className='searchMenu__searchInput' placeholder='search location' />
        </div>
      
        <button className='searchMenu__searchBtn btn btn--blue'>Search</button>
      </div>
      
      <div className='searchMenu__resultSearch'>
        <div className='searchMenu__resultItem'>
          London
        </div>
      </div>
    </div>
  )
};

export default SearchMenu;