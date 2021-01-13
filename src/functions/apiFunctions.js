export const getUrlPhotoFromName = name => {
  switch (name) {
    case 'Snow':
      return 'https://www.metaweather.com/static/img/weather/sn.svg';
      
    case 'Sleet':
      return 'https://www.metaweather.com/static/img/weather/sl.svg';
      
    case 'Hail':
      return 'https://www.metaweather.com/static/img/weather/h.svg';
      
    case 'Thunder':
      return 'https://www.metaweather.com/static/img/weather/t.svg';
      
    case 'Heavy Rain':
      return 'https://www.metaweather.com/static/img/weather/hr.svg';
      
    case 'Light Rain':
      return 'https://www.metaweather.com/static/img/weather/lr.svg';
      
    case 'Showers':
      return 'https://www.metaweather.com/static/img/weather/s.svg';
      
    case 'Heavy Cloud':
      return 'https://www.metaweather.com/static/img/weather/hc.svg';
      
    case 'Light Cloud':
      return 'https://www.metaweather.com/static/img/weather/lc.svg';
      
    case 'Clear':
      return 'https://www.metaweather.com/static/img/weather/c.svg';
    
    default:
      return null;
  }
}

const createId = () => {
  let currentId = 0;
  
  return () => {
    currentId++;
    return currentId;
  };
};

export const generateId = createId();