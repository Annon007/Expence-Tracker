
import React from "react";
import styles from "./ExpenceDate.module.css";

const ExpenceDate = (props) => {
    const weekDay = props.date.getDate();
    const month = new Intl.DateTimeFormat("en-us", { month: "long" }).format(props.date)
    return <div className={styles.expenseDate}>
        <div className={styles.expenseDateMonth}>{month}</div>
        <div className={styles.expenseDateYear}>{props.date.getFullYear()}</div>
        <div className={styles.expenseDateDay}>{weekDay}</div>
    </div>
}
export default ExpenceDate;