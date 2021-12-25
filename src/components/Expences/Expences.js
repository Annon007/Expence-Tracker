import React, { useState } from "react";
import styles from "./Expences.module.css";

import ExpenceItems from "./ExpenceItems";
import ExpenceFilter from "./ExpenceFilter";
import Card from "../UI/Card";

const Expences = (props) => {
    // const [initial, setinitial] = useState(props.expence);
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangedHandeler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    return <Card className={styles.expenses}>
        <ExpenceFilter onChangeFilter={filterChangedHandeler} />
        {props.expence.map((ex, i) => <ExpenceItems props={ex} key={i} />)}
    </Card>
}
export default Expences;