import React from "react";

import styles from "./ExpenceList.module.css";
import ExpenceItems from "./ExpenceItems";

const ExpenceList = (props) => {
    // const year = new Intl.DateTimeFormat("en-us", { year: "numeric" }).format(new Date(ex.date));
    // if (year != props.filteredYear) {
    //     return <p>No Expence Found!</p>
    // }
    // console.log(props.expence[0].date)
    if(props.expence.length===0){
        return <p className={styles.expenceListFallback}>No Expence Found!</p>
    }
    return <ul>
        {props.expence.map((ex, i) => {
            return  <ExpenceItems props={ex} key={i} />;
        })}
    </ul>
};
export default ExpenceList;