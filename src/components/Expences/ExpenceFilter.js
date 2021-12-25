import React from "react";
import styles from "./ExpenceFilter.module.css";
const ExpenceFilter = (props) => {
    const dropdownChnageHandeler = (e) => {
        console.log(e.target.value);
        props.onChangeFilter(e.target.value);
    }
    return <div className={styles.expensesFilter}>
        <div className={styles.expensesFilterControl}>
            <label>Filter by Year</label>
            <select onChange={dropdownChnageHandeler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    </div>
}

export default ExpenceFilter;