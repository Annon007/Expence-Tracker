import React, { useState } from "react";
import styles from "./ExpenceItems.module.css"

// importing components
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";

const ExpenceItems = (expence) => {
    const [title, setTitled] = useState(expence.props.title);
    const clickHandeler = (e) => {
        setTitled("Updated!")
        console.log("Clicked!!!");
        console.log(e.target.value)
        console.log(e.target)
    }
    return <Card className={styles.expenseItem}>
        <ExpenceDate date={expence.props.date} />
        <div className={styles.expenseItemDescription}>
            <h2>{expence.props.title}</h2>
            <div className={styles.expenseItemPrice}> ${expence.props.amount}</div>
        </div>
        {/* <button value={title} name={"hello"} onClick={clickHandeler}>Click Me!</button> */}
    </Card>
}
export default ExpenceItems;