import './scss/main.scss';

import { BannerStatus } from './BannerStatus/BannerStatus';
import { ClimateInfo } from './ClimateInfo/ClimateInfo';

const App = () => {
  return (
    <div className='dashboard'>
      <BannerStatus />
      <ClimateInfo />
    </div>
  );
}

export default App;
