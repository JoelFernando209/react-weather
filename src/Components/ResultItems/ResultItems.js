import React, { useContext } from 'react';

import ResultItem from './ResultItem/ResultItem';

import WoeidContext from '../../context/woeid-context';

const ResultItems = () => {
  const idContext = useContext(WoeidContext);
  
  return (
    <div className='searchMenu__resultSearch'>
      {
        idContext.resultSearch.length > 0 ?
          idContext.resultSearch.map(result => {
            return (
              <ResultItem
                key={result.woeid}
                resultName={result.title}
                click={idContext.changeWoeid.bind(null, result.woeid)}
                woeid={result.woeid}
              />
            )
          })
        :
          null
      }
    </div>
  )
};

export default React.memo(ResultItems);