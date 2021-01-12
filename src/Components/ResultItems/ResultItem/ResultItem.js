import React from 'react';

const ResultItem = ({ resultName, woeid, click }) => {
  return (
    <div className='searchMenu__resultItem' onClick={click}>
      {resultName}
    </div>
  )
};

export default React.memo(ResultItem);