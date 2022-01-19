import React from 'react';

import styles from './chartBar.module.css';

const ChartBar = (props) => {

  let barHeight = "0%";

  if (props.manValue > 0) {
    barHeight = `${Math.round((props.value * props.manValue) * 100)}%`;
  }
  return (
    <div className={styles.chartBar}>
      <div className={styles.chartBarInner}>
        <div
          className={styles.chartBarFill}
          style={{ height: barHeight }}
        ></div>
      </div>
      <div className={styles.chartBarLabel}>{props.label}</div>
    </div>
  );
};

export default ChartBar;