import react from "react";
import styles from "./chart.module.css";
import ChartBar from "./ChartBar";

const Chart=props=>{
    return<div className={styles.chart}>
        {props.dataPoints.map(datapoint=><ChartBar key={datapoint.label} value={datapoint.value} label={datapoint.label} manValue={null} />)}
    </div>
};
export default Chart;