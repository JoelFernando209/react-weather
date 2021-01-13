import React, { useState } from 'react';

import '../../scss/main.scss';

import { BannerStatus } from '../BannerStatus/BannerStatus';
import { ClimateInfo } from '../ClimateInfo/ClimateInfo';

import LoadingPage from '../../Components/LoadingPage/LoadingPage';

const App = () => {
  const [ dataClimate, setDataClimate ] = useState({});
  const [ currentWoeid, setCurrentWoeid ] = useState(0);
  const [ currentTempMeasure, setCurrentTempMeasure ] = useState('C°');
  const [ loadingStatus, setLoadingStatus ] = useState(true);
  
  const changeWoeid = newId => {
    setCurrentWoeid(newId);
  }
  
  return (
    <div className='dashboard'>
      <LoadingPage loadingStatus={loadingStatus} />
      <BannerStatus
        dataClimate={dataClimate}
        setDataClimate={setDataClimate}
        changeWoeid={changeWoeid}
        currentWoeid={currentWoeid}
        tempMeasure={currentTempMeasure}
        setLoadingStatus={setLoadingStatus}
      />
      <ClimateInfo
        dataClimate={dataClimate}
        setCurrentTempMeasure={setCurrentTempMeasure}
        currentTempMeasure={currentTempMeasure}
      />
    </div>
  );
}

export default App;
