import React, { useEffect } from 'react';

import CloseIcon from '../../assets/close-icon.svg';

import ResultItems from '../ResultItems/ResultItems';
import SearchInputData from '../SearchInputData/SearchInputData';

const SearchMenu = ({
    searchMenuState,
    setSearchMenu,
    searchValue,
    setResultSearch
  }) => {
  
  useEffect(() => {
    if(searchValue.trim().length > 0) {
      fetch(`https://www.metaweather.com/api/location/search/?query=${searchValue}`)
      .then(res => res.json())
      .then(data => setResultSearch(data))
      .catch(err => console.log(err));
    }
    
    
  }, [searchValue, setResultSearch]);
  
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
    
      <SearchInputData />
      
      <ResultItems />
    </div>
  )
};

export default React.memo(SearchMenu);