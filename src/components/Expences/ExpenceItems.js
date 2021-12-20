import React from "react";
import styles from "./ExpenceItems.module.css"

// importing components
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";

const ExpenceItems = (expence) => {

    return <Card className={styles.expenseItem}>
        <ExpenceDate date={expence.props.date} />
        <div className={styles.expenseItemDescription}>
            <h2>{expence.props.title}</h2>
            <div className={styles.expenseItemPrice}> ${expence.props.amount}</div>
        </div>
    </Card>
}
export default ExpenceItems;