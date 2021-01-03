import './scss/main.scss';
import { BannerStatus } from './BannerStatus/BannerStatus.js';
import { ClimateInfo } from './ClimateInfo/ClimateInfo.js';

const App = () => {
  return (
    <div className='dashboard'>
      <BannerStatus />
      <ClimateInfo />
    </div>
  );
}

export default App;
