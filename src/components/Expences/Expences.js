import React, { useState } from "react";
import styles from "./Expences.module.css";

import ExpenceFilter from "./ExpenceFilter";
import ExpenceList from "./ExpenceList";
import Card from "../UI/Card";

const Expences = (props) => {
    // const [initial, setinitial] = useState(props.expence);
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangedHandeler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    return <ul>
        <Card className={styles.expenses}>
            <ExpenceFilter onChangeFilter={filterChangedHandeler} />
            <ExpenceList expence={props.expence} filteredYear={filteredYear} />
        </Card>
    </ul>
}
export default Expences;