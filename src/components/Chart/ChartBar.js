import React from 'react';

import './ChartBar.module.css';

const ChartBar = (props) => {

  let barHeight="0%";
  
  if(props.manValue>0){
    barHeight=`${Math.round((props.value*props.manValue)*100)}%`;
  }
  return (
    <div className='chartBar'>
      <div className='chartBarInner'>
        <div
          className='chartBarFill'
          style={{height:barHeight}}
        ></div>
      </div>
      <div className='chartBarLabel'>{props.label}</div>
    </div>
  );
};

export default ChartBar;