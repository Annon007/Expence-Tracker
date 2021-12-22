import React from "react";
import styles from "./NewExpence.module.css";

// importing components

import ExpenceForm from "./ExpenceForm";
const NewExpence = () => {
    return <div className={styles.newExpence}>
        <ExpenceForm />
    </div>

}
export default NewExpence;