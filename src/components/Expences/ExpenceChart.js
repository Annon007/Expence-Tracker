import React from "react";

import Chart from "../Chart/Chart";

const ExpenceChart = props => {
    const ChartExpence = props.expence.flat()
    console.log(ChartExpence);
    const ChartBarValues = [
        { label: "JAN", value: 0 },
        { label: "FEB", value: 0 },
        { label: "MAR", value: 0 },
        { label: "APR", value: 0 },
        { label: "MAY", value: 0 },
        { label: "JUN", value: 0 },
        { label: "JUL", value: 0 },
        { label: "AUG", value: 0 },
        { label: "SEP", value: 0 },
        { label: "OCT", value: 0 },
        { label: "NOV", value: 0 },
        { label: "DEC", value: 0 },
    ];


    ChartExpence.forEach((el, i) => {
        const date = new Date(el.date).getMonth();
        ChartBarValues[date].value += el.amount;
        // ChartBarValues[i].label === date ? ChartBarValues[i].value += el.amount : "";
    })

    return <Chart dataPoints={ChartBarValues} />
}

export default ExpenceChart;