const PercentageBar = ({ widthPercentage }) => {
  return (
    <div className='percentageBar'>
      <div className='percentageBar__progress' style={{ width: `${widthPercentage}%` }}></div>
      <div className='percentageBar__start'>0</div>
      <div className='percentageBar__middle'>50</div>
      <div className='percentageBar__end'>100</div>
    </div>
  )
};

export default PercentageBar;