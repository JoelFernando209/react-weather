import './scss/main.scss';

import { BannerStatus } from './Components/BannerStatus/BannerStatus';
import { ClimateInfo } from './Components/ClimateInfo/ClimateInfo';

const App = () => {
  return (
    <div className='dashboard'>
      <BannerStatus />
      <ClimateInfo />
    </div>
  );
}

export default App;
