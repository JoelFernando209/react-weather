import React from 'react';

const woeidContext = React.createContext({
  woeid: 0,
  changeWoeid: () => {},
  resultSearch: '',
})

export default woeidContext;