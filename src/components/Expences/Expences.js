import React, { useState } from "react";
import styles from "./Expences.module.css";

import ExpenceItems from "./ExpenceItems";
import Card from "../UI/Card";

const Expences = (props) => {
    console.log(props)
    return <Card className={styles.expenses}>
        {props.expence.map((ex, i) => <ExpenceItems props={ex} key={i} />)}
    </Card>
}
export default Expences;