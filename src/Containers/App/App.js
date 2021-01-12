import React, { useState } from 'react';

import '../../scss/main.scss';

import { BannerStatus } from '../BannerStatus/BannerStatus';
import { ClimateInfo } from '../ClimateInfo/ClimateInfo';

const App = () => {
  const [ dataClimate, setDataClimate ] = useState({});
  const [ currentWoeid, setCurrentWoeid ] = useState(0);
  
  const changeWoeid = newId => {
    setCurrentWoeid(newId);
  }
  
  return (
    <div className='dashboard'>
      <BannerStatus
        dataClimate={dataClimate}
        setDataClimate={setDataClimate}
        changeWoeid={changeWoeid}
        currentWoeid={currentWoeid}
      />
      <ClimateInfo />
    </div>
  );
}

export default App;
