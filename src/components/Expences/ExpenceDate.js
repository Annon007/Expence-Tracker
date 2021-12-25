
import React from "react";
import styles from "./ExpenceDate.module.css";

const ExpenceDate = (props) => {
    // console.log(props)
    const weekDay = new Intl.DateTimeFormat("en-us", { weekday: "short" }).format(new Date(props.date));
    const month = new Intl.DateTimeFormat("en-us", { month: "long" }).format(new Date(props.date));
    const year = new Intl.DateTimeFormat("en-us", { year: "numeric" }).format(new Date(props.date));
    return <div className={styles.expenseDate}>
        <div className={styles.expenseDateMonth}>{month}</div>
        <div className={styles.expenseDateYear}>{year}</div>
        <div className={styles.expenseDateDay}>{weekDay}</div>
    </div>
}
export default ExpenceDate;