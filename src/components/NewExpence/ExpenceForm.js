import React from "react";
import styles from "./ExpenceForm.module.css";
const ExpenceForm = () => {
    return <form>
        <div className={styles.newExpenceControlls}>
            <div className={styles.newExpenceControll}>
                <label>Title</label>
                <input type="text" />
            </div>
            <div className={styles.newExpenceControll}>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" />
            </div>
            <div className={styles.newExpenceControll}>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" />
            </div>
            <div className={styles.newExpenceActions}>
                <button type="submit">Add Expence</button>
            </div>
        </div>
    </form>
};
export default ExpenceForm;