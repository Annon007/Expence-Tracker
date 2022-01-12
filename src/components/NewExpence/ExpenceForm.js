import React, { useState } from "react";
import styles from "./ExpenceForm.module.css";

import ExpenceItems from "../Expences/ExpenceItems";

const ExpenceForm = (props) => {

    // const [formdata, setFormData] = useState();

    const formDataHandeler = (e) => {
        e.preventDefault();
        const forData = new FormData(e.target);
        // console.log(...forData)
        const dataObject = Object.fromEntries(forData)
        // console.log(dataObject);
        // setFormData(dataObject)
        // console.log(formdata);
        props.onSaveFormData(dataObject);
        e.target.reset();
    }
    return <form onSubmit={formDataHandeler}>
        <div className={styles.newExpenceControlls}>
            <div className={styles.newExpenceControll}>
                <label>Title</label>
                <input name="title" type="text" required />
            </div>
            <div className={styles.newExpenceControll}>
                <label>Amount</label>
                <input type="number" name="amount" min="0.01" step="0.01"required />
            </div>
            <div className={styles.newExpenceControll}>
                <label>Date</label>
                <input type="date" name="date" min="2019-01-01" max="2022-12-31" required/>
            </div>
            <div className={styles.newExpenceActions}>
                <button type="submit" >Add Expence</button>
            </div>
        </div>
    </form>
};
export default ExpenceForm;