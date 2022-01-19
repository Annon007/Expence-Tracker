import react from "react";
import styles from "./chart.module.css";
import ChartBar from "./ChartBar";

const Chart = props => {
    const totalValue = props.dataPoints.map(el => el.value);
    const maxValue = Math.max(...totalValue)
    console.log(maxValue, "Total Vlaues")
    return <div className={styles.chart}>
        {props.dataPoints.map(datapoint => <ChartBar key={datapoint.label} value={datapoint.value} label={datapoint.label} manValue={maxValue} />)}
    </div>
};
export default Chart;